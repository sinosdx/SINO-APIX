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
package com.sinosdx.service.management.controller;

import com.alibaba.fastjson.JSONObject;
import com.sinosdx.common.base.annotation.AuditLog;
import com.sinosdx.service.management.controller.vo.ApplicationVersionVo;
import com.sinosdx.service.management.controller.vo.ApplicationVo;
import com.sinosdx.service.management.dao.entity.Application;
import com.sinosdx.service.management.dao.entity.ApplicationPlugin;
import com.sinosdx.service.management.enums.ResultCodeEnum;
import com.sinosdx.service.management.result.R;
import com.sinosdx.service.management.service.ApplicationService;
import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author wendy
 * @date 2020/12/8
 */
@Api(tags = "统一应用中台模块")
@RestController
@RequestMapping("/app")
public class ApplicationController {

    @Autowired
    private ApplicationService applicationService;

    /**
     * 创建新应用
     *
     * @param applicationVo
     * @return
     */
    @AuditLog(type = "创建新应用", name = "应用")
    @ApiOperation("创建新应用")
    @ApiImplicitParams({
            @ApiImplicitParam(paramType = "body", name = "appName", dataType = "String", required = true, value = "应用名称"),
            @ApiImplicitParam(paramType = "body", name = "appCode", dataType = "String", required = true, value = "应用编号"),
            @ApiImplicitParam(paramType = "body", name = "description", dataType = "String", required = false, value = "应用描述文档")
    })
    @ApiResponses({
            @ApiResponse(code = 0, message = "请求成功"),
    })
    @PostMapping("/create")
    public R<Object> createApplication(@RequestBody ApplicationVo applicationVo) {
        R<Object> data = applicationService.createApplication(new Application(applicationVo));
        if (null == data.getData()) {
            return data;
        } else {
            return R.success(new ApplicationVo((Application) data.getData()));
        }
    }

    /**
     * 查看应用列表（应用管理和资源市场都可用）
     *
     * @param developerId
     * @param isPublished
     * @param startTime
     * @param endTime
     * @return
     */
    @AuditLog(type = "查询应用列表", name = "应用")
    @ApiOperation("查看应用列表（应用管理和资源市场都可用）")
    @ApiImplicitParams({
            @ApiImplicitParam(paramType = "query", name = "developerId", dataType = "Integer", required = false, value = "开发者id（传入此参数显示开发者关联的应用列表）"),
            @ApiImplicitParam(paramType = "query", name = "appName", dataType = "String", required = false, value = "应用名称"),
            @ApiImplicitParam(paramType = "query", name = "appCode", dataType = "String", required = false, value = "应用编号"),
            @ApiImplicitParam(paramType = "query", name = "appId", dataType = "Integer", required = false, value = "应用id"),
            @ApiImplicitParam(paramType = "query", name = "isPublished", dataType = "String", required = false, value = "是否发布到资源市场（传入此参数显示资源市场应用列表）"),
            @ApiImplicitParam(paramType = "query", name = "startTime", dataType = "Long", required = false, value = "开始时间戳查询（根据创建时间）"),
            @ApiImplicitParam(paramType = "query", name = "endTime", dataType = "Long", required = false, value = "结束时间戳查询（根据创建时间）"),
            @ApiImplicitParam(paramType = "query", name = "limit", dataType = "Integer", required = false, value = "每页条数"),
            @ApiImplicitParam(paramType = "query", name = "offset", dataType = "Integer", required = false, value = "页码")
    })
    @ApiResponses({
            @ApiResponse(code = 0, message = "请求成功"),
    })
    @GetMapping("/list")
    public R<Object> getApplicationList(@RequestParam(value = "developerId", required = false) Integer developerId,
                                        @RequestParam(value = "appName", required = false) String appName,
                                        @RequestParam(value = "appCode", required = false) String appCode,
                                        @RequestParam(value = "appId", required = false) Integer appId,
                                        @RequestParam(value = "isPublished", required = false) String isPublished,
                                        @RequestParam(value = "startTime", required = false) Long startTime,
                                        @RequestParam(value = "endTime", required = false) Long endTime,
                                        @RequestParam(value = "limit", required = false) Integer limit,
                                        @RequestParam(value = "offset", required = false) Integer offset,
                                        @RequestParam(value = "market", required = false) Boolean market) {
        return applicationService.queryApplicationList(developerId, appName, appCode, appId, isPublished,
                startTime, endTime, limit, offset, market);
    }

    /**
     * 查看应用详情
     *
     * @param appCode
     * @param developerId 开发者id（传入此参数显示开发者关联的应用详情，在资源市场列表和查询正使用的应用详情时不传）
     * @return
     */
    @AuditLog(type = "查询应用详情", name = "应用")
    @ApiOperation("查看应用详情")
    @ApiImplicitParams({
            @ApiImplicitParam(paramType = "path", name = "appCode", dataType = "String", required = true, value = "应用编号"),
            @ApiImplicitParam(paramType = "query", name = "developerId", dataType = "Integer", required = false, value = "开发者id（传入此参数显示开发者关联的应用详情，在资源市场列表和查询正使用的应用详情时不传）")
    })
    @ApiResponses({
            @ApiResponse(code = 0, message = "请求成功"),
    })
    @GetMapping("/{appCode}")
    public R<Object> getApplicationDetails(@PathVariable("appCode") String appCode,
                                           @RequestParam(value = "developerId", required = false) Integer developerId) {
        return applicationService.queryApplicationDetails(appCode, developerId);
    }

    /**
     * 修改应用详情（包含应用上下架功能）
     *
     * @param appCode
     * @param applicationVo
     * @return
     */
    @AuditLog(type = "修改应用详情", name = "应用")
    @ApiOperation("修改应用详情（包含应用上下架功能）")
    @ApiImplicitParams({
            @ApiImplicitParam(paramType = "path", name = "appCode", dataType = "String", required = true, value = "应用编号"),
            @ApiImplicitParam(paramType = "body", name = "appName", dataType = "String", required = false, value = "应用名称"),
            @ApiImplicitParam(paramType = "body", name = "description", dataType = "String", required = false, value = "应用描述"),
            @ApiImplicitParam(paramType = "body", name = "markdown", dataType = "String", required = false, value = "应用描述文档"),
            @ApiImplicitParam(paramType = "body", name = "iconUrl", dataType = "String", required = false, value = "应用图标路径"),
            @ApiImplicitParam(paramType = "body", name = "isPublished", dataType = "String", required = true, value = "是否上架资源市场")
    })
    @ApiResponses({
            @ApiResponse(code = 0, message = "请求成功"),
    })
    @PutMapping("/{appCode}")
    public R<Object> modifyApplication(@PathVariable("appCode") String appCode,
                                       @RequestBody ApplicationVo applicationVo) {
        applicationVo.setAppCode(appCode);
        return applicationService.updateApplication(applicationVo);
    }

    /**
     * 删除应用
     *
     * @param appCode
     * @return
     */
    @AuditLog(type = "删除应用", name = "应用")
    @ApiOperation("删除应用")
    @ApiImplicitParams({
            @ApiImplicitParam(paramType = "path", name = "appCode", dataType = "String", required = true, value = "应用编号")
    })
    @ApiResponses({
            @ApiResponse(code = 0, message = "请求成功"),
    })
    @DeleteMapping("/{appCode}")
    public R<Object> deleteApplication(@PathVariable("appCode") String appCode) {
        return applicationService.deleteApplication(appCode);
    }

    /**
     * 发布应用新版本
     *
     * @param appCode
     * @param applicationVersionVo
     * @return
     */
    @AuditLog(type = "发布应用新版本", name = "应用")
    @ApiOperation("修改应用详情（包含应用上下架功能）")
    @ApiImplicitParams({
            @ApiImplicitParam(paramType = "path", name = "appCode", dataType = "String", required = true, value = "应用编号"),
            @ApiImplicitParam(paramType = "body", name = "appVersion", dataType = "String", required = true, value = "应用新版本号"),
            @ApiImplicitParam(paramType = "body", name = "versionDesc", dataType = "String", required = false, value = "应用新版本描述"),
            @ApiImplicitParam(paramType = "body", name = "apiIds", dataType = "String", required = true, value = "绑定apiId拼接字符串，用“,”间隔")
    })
    @ApiResponses({
            @ApiResponse(code = 0, message = "请求成功"),
    })
    @PostMapping("/{appCode}/publish")
    public R<Object> publishNewAppVersion(@PathVariable("appCode") String appCode,
                                          @RequestBody ApplicationVersionVo applicationVersionVo) {
        applicationVersionVo.setAppCode(appCode);
        return applicationService.publishNewAppVersion(applicationVersionVo);
    }

    /**
     * 绑定应用服务（使用资源市场应用服务）
     *
     * @param appLesseeCode
     * @param appLessorCode
     * @return
     */
    @Deprecated
    @AuditLog(type = "订阅应用", name = "应用")
    @ApiOperation("绑定应用服务（使用资源市场应用服务）")
    @ApiImplicitParams({
            @ApiImplicitParam(paramType = "path", name = "appLesseeCode", dataType = "String", required = true, value = "申请服务的应用编号"),
            @ApiImplicitParam(paramType = "path", name = "appLessorCode", dataType = "String", required = true, value = "被申请应用编号")
    })
    @ApiResponses({
            @ApiResponse(code = 0, message = "请求成功"),
    })
    @PostMapping("/{appLesseeCode}/lease/{appLessorCode}")
    public R<Object> appLease(@PathVariable("appLesseeCode") String appLesseeCode,
                              @PathVariable("appLessorCode") String appLessorCode) {
        return applicationService.appLease(appLesseeCode, appLessorCode);
    }

    /**
     * 解绑应用服务
     *
     * @param appCode
     * @return
     */
    @AuditLog(type = "退订应用", name = "应用")
    @PostMapping("/unSubscribe/{appSubscribedCode}")
    public R<Object> unSubscribe(@PathVariable("appSubscribedCode") String appCode) {
        return applicationService.unSubscribe(appCode);
    }

    /**
     * 添加应用开发者
     *
     * @param appCode
     * @param requestMap
     * @return
     */
    @AuditLog(type = "添加应用开发者", name = "应用")
    @ApiOperation("添加应用开发者")
    @ApiImplicitParams({
            @ApiImplicitParam(paramType = "path", name = "appCode", dataType = "String", required = true, value = "应用编号"),
            @ApiImplicitParam(paramType = "body", name = "username", dataType = "String", required = true, value = "被添加开发者的username"),
            @ApiImplicitParam(paramType = "body", name = "phone", dataType = "String", required = true, value = "被添加开发者的phone")
    })
    @ApiResponses({
            @ApiResponse(code = 0, message = "请求成功"),
    })
    @PostMapping("/{appCode}/developer/add")
    public R<Object> addAppDeveloper(@PathVariable("appCode") String appCode,
                                     @RequestBody Map<String, String> requestMap) {
        if (!requestMap.containsKey("phone")) {
            return R.fail(ResultCodeEnum.PARAM_NOT_COMPLETE);
        }
        return applicationService.addAppDeveloper(appCode, requestMap.get("phone"));
    }

    /**
     * 查看应用开发者列表
     *
     * @param appCode
     * @return
     */
    @AuditLog(type = "查看应用开发者列表", name = "应用")
    @ApiOperation("查看应用开发者列表")
    @ApiImplicitParams({
            @ApiImplicitParam(paramType = "path", name = "appCode", dataType = "String", required = true, value = "应用编号")
    })
    @ApiResponses({
            @ApiResponse(code = 0, message = "请求成功"),
    })
    @GetMapping("/{appCode}/developer/list")
    public R<Object> queryAppDeveloperList(@PathVariable("appCode") String appCode) {
        return applicationService.queryAppDeveloperList(appCode);
    }

    /**
     * 移除应用开发者
     *
     * @param appCode
     * @param developerId
     * @return
     */
    @AuditLog(type = "移除应用开发者", name = "应用")
    @ApiOperation("移除应用开发者")
    @ApiImplicitParams({
            @ApiImplicitParam(paramType = "path", name = "appCode", dataType = "String", required = true, value = "应用编号"),
            @ApiImplicitParam(paramType = "path", name = "developerId", dataType = "Integer", required = true, value = "被移除开发者的userId")
    })
    @ApiResponses({
            @ApiResponse(code = 0, message = "请求成功"),
    })
    @DeleteMapping("/{appCode}/developer/delete/{developerId}")
    public R<Object> deleteAppDeveloper(@PathVariable("appCode") String appCode,
                                        @PathVariable("developerId") Integer developerId) {
        return applicationService.deleteAppDeveloper(appCode, developerId);
    }

    /**
     * 获取首页仪表盘应用相关数据
     *
     * @return
     */
    @GetMapping("/dashboard")
    public R<Map<String, Object>> queryAppDataForDashboard() {
        return applicationService.queryAppDataForDashboard();
    }

    /**
     * 根据code查询app
     *
     * @return
     */
    @GetMapping("/query")
    public R<Application> queryAppByAppCode(@RequestParam(value = "appCode") String appCode) {
        return applicationService.queryAppByAppCode(appCode);
    }

    /**
     * 查询对接应用时的应用列表（不包含当前应用）
     *
     * @param appCode
     * @param developerId
     * @return
     */
    @GetMapping("/lease/list")
    R<List<Map<String, String>>> queryAppNameAndCodeForLease(@RequestParam(value = "appCode") String appCode,
                                                             @RequestParam(value = "developerId", required = false) Integer developerId) {
        return applicationService.queryAppNameAndCodeForLease(appCode, developerId);
    }

    /**
     * 查询当前开发者所有对接应用
     *
     * @param developerId
     * @return
     */
    @GetMapping("/lease/all/list")
    R<List<Map<String, Object>>> queryAllAppLeaseByDeveloper(@RequestParam(value = "developerId", required = true) Integer developerId) {
        return applicationService.queryAllAppLeaseByDeveloper(developerId);
    }

    /**
     * 移除应用对接
     *
     * @param appLesseeCode
     * @param appLessorCode
     * @return
     */
    @Deprecated
    @AuditLog(type = "移除应用订阅", name = "应用")
    @DeleteMapping("/remove/{appLesseeCode}/lease/{appLessorCode}")
    public R<Object> removeAppLease(@PathVariable("appLesseeCode") String appLesseeCode,
                              @PathVariable("appLessorCode") String appLessorCode) {
        return applicationService.removeAppLease(appLesseeCode, appLessorCode);
    }

    /**
     * 查询调用当前应用的应用编号列表
     *
     * @param lessorAppCode
     * @return
     */
    @GetMapping("/{lessorAppCode}/lessee/list")
    public R<List<String>> queryAppCodeListByLessorAppCode(@PathVariable("lessorAppCode") String lessorAppCode) {
        return applicationService.queryAppCodeListByLessorAppCode(lessorAppCode);
    }

    /**
     * 通过查询clientId验证ApplicationLease是否存在
     *
     * @param clientId
     * @return
     */
    @PostMapping("/lease/verify/{clientId}")
    R<Boolean> verifyClientId(@PathVariable("clientId") String clientId) {
        return applicationService.verifyClientId(clientId);
    }

    /**
     * 查询已订阅应用列表
     *
     * @param developerId 开发者id
     * @param appName
     * @param appCode
     * @param appId
     * @param limit
     * @param offset
     * @return
     */
    @AuditLog(type = "查询已订阅应用列表", name = "应用")
    @GetMapping("/subscribed/list")
    public R<Object> querySubscribedAppList(@RequestParam(value = "developerId", required = false) Integer developerId,
                                            @RequestParam(value = "appName", required = false) String appName,
                                            @RequestParam(value = "appCode", required = false) String appCode,
                                            @RequestParam(value = "appId", required = false) Integer appId,
                                            @RequestParam(value = "limit", required = false) Integer limit,
                                            @RequestParam(value = "offset", required = false) Integer offset) {
        return applicationService.querySubscribedAppList(developerId, appName, appCode, appId, limit, offset);
    }

    /**
     * 查看已订阅应用详情
     *
     * @param appCode
     * @return
     */
    @AuditLog(type = "查看已订阅应用详情", name = "应用")
    @GetMapping("/subscribed/{appCode}")
    public R<Object> querySubscribedAppDetail(@PathVariable("appCode") String appCode) {
        return applicationService.querySubscribedAppDetail(appCode);
    }

    /**
     * 查询产品列表
     *
     * @return
     */
    @GetMapping("/product/list")
    public R<Object> queryProductList() {
        return applicationService.queryProductList();
    }

    @GetMapping("/timezone")
    R<Object> testTimeZone() {
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

        Map<String, Object> map = new HashMap<>();
        map.put("new Date", dateFormat.format(new Date()));
        map.put("LocalDateTime.now()", LocalDateTime.now());
        return R.success(map);
    }

    /**
     * 查询订阅当前应用的应用列表
     *
     * @param appCode
     * @return
     */
    @GetMapping("/subscribe/current/list")
    public R<Object> querySubscribedAppList(@RequestParam String appCode,
                                            @RequestParam(value = "developerId", required = false) Integer developerId) {
        return applicationService.querySubscribedAppList(appCode, developerId);
    }

    /**
     * 更新AppVersion
     */
    @AuditLog(type = "更新服务版本", name = "应用")
    @PostMapping("/appVersion/{appVersionId}")
    public R<Object> updateAppVersion (@PathVariable(name = "appVersionId") Integer appVersionId,
            @RequestBody ApplicationVersionVo applicationVersionVo) {
        return applicationService.updateAppVersion(appVersionId,applicationVersionVo);
    }

    /**
     * 删除 AppVersion
     */
    @AuditLog(type = "删除服务版本", name = "应用")
    @DeleteMapping("/appVersion/{appVersionId}")
    public R<Object> deleteAppVersion (@PathVariable(name = "appVersionId") Integer appVersionId) {
        return applicationService.deleteAppVersion(appVersionId);
    }
    /**
     * 获取 AppVersion 详情
     */
    @AuditLog(type = "查看服务版本详情", name = "应用")
    @GetMapping("/appVersion/{appVersionId}")
    public R<Object> queryAppVersion (@PathVariable(name = "appVersionId") Integer appVersionId) {
        return applicationService.queryAppVersion(appVersionId);
    }


    /**
     *  获取我的应用的所有appCodes
     * @param developId
     * @return
     */
    @GetMapping("/appList/{developId}")
    public R<Object> getMyAppCodes (@PathVariable(name = "developId") Integer developId) {
        return applicationService.getMyAppCodes(developId);
    }




}
