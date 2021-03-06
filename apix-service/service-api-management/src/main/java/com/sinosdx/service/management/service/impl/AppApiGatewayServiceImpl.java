/*
 * Copyright © 2022 SinoSDX (biz@sinosdx.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.sinosdx.service.management.service.impl;

import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.sinosdx.service.management.consumer.GatewayServiceFeign;
import com.sinosdx.service.management.dao.entity.Api;
import com.sinosdx.service.management.dao.entity.ApplicationApiGateway;
import com.sinosdx.service.management.dao.entity.ApplicationPlugin;
import com.sinosdx.service.management.dao.mapper.ApplicationApiGatewayMapper;
import com.sinosdx.service.management.dao.mapper.ApplicationPluginClientMapper;
import com.sinosdx.service.management.dao.mapper.ApplicationPluginMapper;
import com.sinosdx.service.management.enums.PluginTypeEnum;
import com.sinosdx.service.management.service.AppApiGatewayService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import javax.annotation.Resource;
import java.util.*;

/**
 * @author wendy
 * @date 2022/1/12
 */
@Service
@Slf4j
public class AppApiGatewayServiceImpl implements AppApiGatewayService {

    @Resource
    private ApplicationApiGatewayMapper appApiGatewayMapper;

    @Autowired
    private GatewayServiceFeign gatewayService;

    @Resource
    private ApplicationPluginClientMapper applicationPluginClientMapper;

    @Resource
    private ApplicationPluginMapper applicationPluginMapper;

    /**
     * api发布到网关
     *
     * @param applicationId
     * @param apiList
     */
    @Override
    public void updateApiGatewayConfig(Integer applicationId, List<Api> apiList, String appClientCode) {
        // 先将所有新增的路由入库（应用方）
        Set<String> addGatewayIdSet = new HashSet<>();
        Set<String> updateGatewayIdSet = new HashSet<>();
        for (Api api : apiList) {
            log.info("update api {} gateway config", api.getId());
            String uri = "/" + appClientCode + api.getUrl();
            while (uri.contains("{")) {
                String bracket = uri.substring(uri.indexOf("{"), uri.indexOf("}") + 1);
                uri = uri.replace(bracket, "*");
            }

            // 查询网关当前应用服务地址的路由列表
            List<ApplicationApiGateway> gatewayList = appApiGatewayMapper.selectList(new QueryWrapper<ApplicationApiGateway>()
                    .eq("url_code", appClientCode).eq("domain", api.getDomain())
                    .eq("is_internal", api.getIsInternal()).eq("prefix_path", api.getPrefixPath()));
            String gatewayId = "";
            // 区分是新增的路由还是更新的路由
            if (CollectionUtils.isEmpty(gatewayList)) {
                gatewayId = appClientCode + "_" + UUID.randomUUID().toString().split("-")[0];
                addGatewayIdSet.add(gatewayId);
            } else {
                gatewayId = gatewayList.get(0).getGatewayId();
                updateGatewayIdSet.add(gatewayId);
            }
            // 查询网关是否有对应路由
            ApplicationApiGateway appApiGateway = appApiGatewayMapper.selectOne(new QueryWrapper<ApplicationApiGateway>()
                    .eq("url_code", appClientCode).eq("domain", api.getDomain())
                    .eq("app_id", applicationId).eq("api_url", api.getUrl())
                    .eq("is_internal", api.getIsInternal()).eq("prefix_path", api.getPrefixPath()));
            if (null == appApiGateway) {
                ApplicationApiGateway gateway = ApplicationApiGateway.builder()
                        .urlCode(appClientCode)
                        .appId(applicationId)
                        .apiId(api.getId())
                        .apiUrl(api.getUrl())
                        .prefixPath(api.getPrefixPath())
                        .domain(api.getDomain())
                        .gatewayId(gatewayId)
                        .isInternal(api.getIsInternal())
                        .build();
                appApiGatewayMapper.insert(gateway);
            }
        }

        // 整合需要新增和更新的网关路由，发布到网关
        for (String gatewayId : addGatewayIdSet) {
            JSONObject gatewayConfig = createGatewayConfig(gatewayId);
            if (null != gatewayConfig) {
                log.info("create gateway config: " + gatewayConfig.toJSONString());
                gatewayService.create(gatewayConfig);
            }
        }
        for (String gatewayId : updateGatewayIdSet) {
            JSONObject gatewayConfig = createGatewayConfig(gatewayId);
            if (null != gatewayConfig) {
                log.info("update gateway config: " + gatewayConfig.toJSONString());
                gatewayService.update(gatewayConfig);
            }
        }
    }

    private JSONObject createGatewayConfig(String gatewayId) {
        List<ApplicationApiGateway> gatewayList = appApiGatewayMapper.selectList(new QueryWrapper<ApplicationApiGateway>()
                .eq("gateway_id", gatewayId));
        if (CollectionUtils.isEmpty(gatewayList)) {
            return null;
        }
        JSONObject gatewayConfig = new JSONObject();
        gatewayConfig.put("id", gatewayId);
        gatewayConfig.put("uri", gatewayList.get(0).getDomain());
        Map<String, Object> predicate = new HashMap<>();
        predicate.put("name", "Path");
        Map<String, String> argsMap = new LinkedHashMap<>();
        for (int i = 0; i < gatewayList.size(); i++) {
            ApplicationApiGateway gateway = gatewayList.get(i);
            argsMap.put("_genkey_" + i, "/" + gateway.getUrlCode() + gateway.getApiUrl());
        }
        predicate.put("args", argsMap);
        gatewayConfig.put("predicates", Collections.singletonList(predicate));

        List<Object> filterList = new LinkedList<>();
        // 配置是否需要截取路径第一段
        Integer isInternal = gatewayList.get(0).getIsInternal();
        if (isInternal == 0) {
            filterList.add(JSONObject.parseObject("{\n" +
                    "            \"name\": \"StripPrefix\",\n" +
                    "            \"args\": {\n" +
                    "                \"_genkey_0\": \"1\"\n" +
                    "            }\n" +
                    "        }\n"));
        }

        // 配置是否需要拼装前置路径
        String prefixPath = gatewayList.get(0).getPrefixPath();
        if (null != prefixPath) {
            filterList.add(JSONObject.parseObject("{\n" +
                    "            \"name\": \"PrefixPath\",\n" +
                    "            \"args\": {\n" +
                    "                \"_genkey_0\": \"" + prefixPath + "\"\n" +
                    "            }\n" +
                    "        }"));
        }

        // 查询服务插件配置
        //        List<ApplicationPluginClient> appPluginClients = applicationPluginClientMapper.queryByAppSubscribe(gatewayList.get(0).getUrlCode());
        List<ApplicationPlugin> applicationPlugins = applicationPluginMapper.selectList(new LambdaQueryWrapper<ApplicationPlugin>()
                .eq(ApplicationPlugin::getAppId, gatewayList.get(0).getAppId())
                .eq(ApplicationPlugin::getEnabled, 1));

        // 配置过滤器
        if (!applicationPlugins.isEmpty()) {
            for (ApplicationPlugin appPlugin : applicationPlugins) {
                if (appPlugin.getPluginType().equals(PluginTypeEnum.SENTINEL.getType())) {
                    // sentinel是特殊的过滤器
                    continue;
                }

                Map<String, Object> gatewayFilter = new HashMap<>();
                Map<String, Object> filterArgs = new LinkedHashMap<>();
                JSONObject pluginParams = JSONObject.parseObject(appPlugin.getPluginParams());
                // jwt插件
                if (appPlugin.getPluginType().equals(PluginTypeEnum.JWT.getType())) {
                    gatewayFilter.put("name", PluginTypeEnum.JWT.getFilterName());
                    //                    filterArgs.put("_genkey_0", pluginParams.getString("keyName"));
                    //                    filterArgs.put("_genkey_1", pluginParams.getString("secretKey"));
                    //                    filterArgs.put("_genkey_2", pluginParams.getLong("expirationTime"));
                    //                    gatewayFilter.put("args", filterArgs);
                }
                // oauth2插件
                else if (appPlugin.getPluginType().equals(PluginTypeEnum.OAUTH2.getType())) {
                    gatewayFilter.put("name", PluginTypeEnum.OAUTH2.getFilterName());
                    //                    filterArgs.put("_genkey_0", pluginParams.getString("clientId"));
                    //                    filterArgs.put("_genkey_1", pluginParams.getString("clientSecret"));
                    //                    gatewayFilter.put("args", filterArgs);
                }
                // base_auth插件
                else if (appPlugin.getPluginType().equals(PluginTypeEnum.BASE_AUTH.getType())) {
                    gatewayFilter.put("name", PluginTypeEnum.BASE_AUTH.getFilterName());
                    //                    filterArgs.put("_genkey_0", pluginParams.getString("username"));
                    //                    filterArgs.put("_genkey_1", pluginParams.getString("password"));
                    //                    gatewayFilter.put("args", filterArgs);
                }
                // 黑名单插件
                else if (appPlugin.getPluginType().equals(PluginTypeEnum.BLACK_LIST_IP.getType())) {
                    gatewayFilter.put("name", PluginTypeEnum.BLACK_LIST_IP.getFilterName());
                    filterArgs.put("_genkey_0", pluginParams.getString("black_list_ip"));
                    gatewayFilter.put("args", filterArgs);
                }
                // 白名单插件
                else if (appPlugin.getPluginType().equals(PluginTypeEnum.WHITE_LIST_IP.getType())) {
                    gatewayFilter.put("name", PluginTypeEnum.WHITE_LIST_IP.getFilterName());
                    filterArgs.put("_genkey_0", pluginParams.getString("white_list_ip"));
                    gatewayFilter.put("args", filterArgs);
                }
                // cors插件
                else if (appPlugin.getPluginType().equals(PluginTypeEnum.CORS.getType())) {
                    gatewayFilter.put("name", PluginTypeEnum.CORS.getFilterName());
                    filterArgs.put("_genkey_0", pluginParams.getString("allowOrigins"));
                    filterArgs.put("_genkey_1", pluginParams.getString("allowMethods"));
                    filterArgs.put("_genkey_2", pluginParams.getString("allowHeaders"));
                    filterArgs.put("_genkey_3", pluginParams.getString("exposeHeaders"));
                    filterArgs.put("_genkey_4", pluginParams.getInteger("maxAge"));
                    filterArgs.put("_genkey_5", pluginParams.getBoolean("allowCredentials"));
                    gatewayFilter.put("args", filterArgs);
                }
                // 签名插件
                else if (appPlugin.getPluginType().equals(PluginTypeEnum.SIGN.getType())) {
                    gatewayFilter.put("name", PluginTypeEnum.SIGN.getFilterName());
                    filterArgs.put("_genkey_0", pluginParams.getString("appKey") + pluginParams.getString("appSecret"));
                    gatewayFilter.put("args", filterArgs);
                } else {
                    // 无生成参数的过滤器
                    gatewayFilter.put("name", PluginTypeEnum.getPluginTypeEnum(appPlugin.getPluginType()).getFilterName());
                }
                filterList.add(gatewayFilter);
            }
        }
        gatewayConfig.put("filters", filterList);

        return gatewayConfig;
    }

    /**
     * 删除已发布的api网关
     *
     * @param applicationId
     * @param apiList
     * @param appClientCode
     */
    @Override
    public void deleteApiGatewayConfig(Integer applicationId, List<Api> apiList, String appClientCode) {
        Set<String> updateGatewayIdSet = new HashSet<>();
        for (Api api : apiList) {
            List<ApplicationApiGateway> gatewayList = appApiGatewayMapper.queryListByCondition(null, applicationId, api.getId(), appClientCode);
            if (CollectionUtils.isEmpty(gatewayList)) {
                continue;
            }
            String gatewayId = gatewayList.get(0).getGatewayId();
            for (ApplicationApiGateway apiGateway : gatewayList) {
                appApiGatewayMapper.deleteById(apiGateway);
            }

            // 查询当前gatewayId下是否只有一个api
            List<ApplicationApiGateway> oldGatewayList = appApiGatewayMapper.queryListByCondition(gatewayId, null, null, null);
            int count = oldGatewayList.size();

            // 只有一个api，删除整个gatewayId下的路由
            if (count == 0) {
                try {
                    gatewayService.delete(gatewayId);
                } catch (Exception e) {
                    e.printStackTrace();
                    log.error("删除路由出错", e);
                }
            }
            // 不止一个api，需要对路由做更新
            else {
                updateGatewayIdSet.add(gatewayId);
            }
        }

        // 更新路由
        for (String gatewayId : updateGatewayIdSet) {
            JSONObject gatewayConfig = this.createGatewayConfig(gatewayId);
            if (null != gatewayConfig) {
                gatewayService.update(gatewayConfig);
            }
        }

    }
}
