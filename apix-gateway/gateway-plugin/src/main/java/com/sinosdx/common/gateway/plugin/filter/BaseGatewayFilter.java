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
package com.sinosdx.common.gateway.plugin.filter;


import cn.hutool.core.util.StrUtil;
import com.alibaba.fastjson.JSON;
import com.sinosdx.common.base.constants.HeaderConstant;
import com.sinosdx.common.gateway.constants.GatewayConstants;
import com.sinosdx.common.gateway.entity.BaseConfig;
import com.sinosdx.common.gateway.plugin.entity.RequestInfo;
import com.sinosdx.common.toolkit.common.LogUtil;
import com.sinosdx.common.toolkit.common.StringUtil;
import java.lang.reflect.Field;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import lombok.Getter;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.core.Ordered;
import org.springframework.http.HttpHeaders;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

/**
 * 抽象自定义过滤器
 *
 * @author pengjiahu
 * @date 2021-06-18 00:43
 * @description 注意：
 * 1、自定义过滤器顺序是按照各服务配置的插件顺序，如
 * filters:
 * - StripPrefix=1
 * - RealIp=
 * - Cors=
 * - Sign=
 * - ProxyCache=120
 * 以上会按照从上至下顺序，所以需在发布服务时排序。
 * 2、Config配置的value类型必须是String类型，否则会有类型转换失败
 */
@Slf4j
@Setter
@Getter
public abstract class BaseGatewayFilter<C extends BaseConfig> extends AbstractGatewayFilterFactory<C> {

    public static final int ZERO = 0;
    private Class<C> configClass;

    protected BaseGatewayFilter(Class<C> configClass) {
        super(configClass);
        this.configClass = configClass;
    }

    @Override
    public List<String> shortcutFieldOrder() {
        List<String> a = Arrays.stream(configClass.getSuperclass().getDeclaredFields())
                .map(Field::getName).collect(Collectors.toList());
        List<String> b = Arrays.stream(configClass.getDeclaredFields())
                .map(Field::getName).collect(Collectors.toList());
        return a.stream().sequential().collect(Collectors.toCollection(() -> b));
    }

    /**
     * 自定义顺序，可覆盖
     *
     * @return
     */
    public int setOrder() {
        return ZERO;
    }

    @Override
    public GatewayFilter apply(C config) {
        return new CustomFilter(config, setOrder(), this.getClass().getSimpleName());
    }

    /**
     * 自定义实现过滤器，支持排序
     */
    private class CustomFilter implements GatewayFilter, Ordered {

        private C config;
        private int order;
        private String customFilterName;

        public CustomFilter(C config, int order, String customFilterName) {
            this.config = config;
            this.order = order;
            this.customFilterName = customFilterName;
        }

        @Override
        public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
            HttpHeaders headers = exchange.getRequest().getHeaders();
            String path = headers.getFirst(GatewayConstants.PATH);
            if (!checkAuthVerifyExclude(config, path)) {
                String requestNo = headers.getFirst(HeaderConstant.REQUEST_NO_HEADER_NAME);
                LogUtil.debug(log, "url【{}】order：【{}】 requestId【{}】processed by【{}】custom filter,config:{}",
                        path, order, requestNo, customFilterName, JSON.toJSONString(config));
                return customApply(exchange, chain, config);
            }
            return chain.filter(exchange);
        }

        @Override
        public int getOrder() {
            return order;
        }
    }


    /**
     * 获取请求聚合信息
     *
     * @param exchange
     * @return
     */
    public RequestInfo getRequestInfo(ServerWebExchange exchange) {
        ServerHttpRequest req = exchange.getRequest();
        HttpHeaders headers = req.getHeaders();
        String requestNo = headers.getFirst(HeaderConstant.REQUEST_NO_HEADER_NAME);
        String urlPath = req.getURI().getPath();
        return RequestInfo.builder()
                .requestNo(requestNo)
                .ip(headers.getFirst(HeaderConstant.IP))
                .appCode(StringUtil.splitToList(urlPath).get(0))
                .requestPath(urlPath)
                .build();
    }

    /**
     * 自定义处理
     *
     * @param exchange
     * @param chain
     * @param config
     * @return
     */
    public abstract Mono<Void> customApply(ServerWebExchange exchange, GatewayFilterChain chain, C config);

    /**
     * 自定义过滤排除列表的校验
     *
     * @param config
     * @param path
     * @return
     */
    public boolean checkAuthVerifyExclude(C config, String path) {
        String authExcludeUri = config.getAuthExcludeUri();
        if (StringUtil.isBlank(authExcludeUri)) {
            return false;
        }
        List<String> list = Arrays.stream(authExcludeUri.split(";")).filter(StrUtil::isNotEmpty)
                .collect(Collectors.toList());
        for (String uri : list) {
            if (path.contains(uri.toLowerCase())) {
                return true;
            }
        }
        return false;
    }
}
