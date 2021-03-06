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
package com.sinosdx.common.gateway.plugin.filter.global;

import com.sinosdx.common.gateway.plugin.enums.FilterOrderEnum;
import com.sinosdx.common.gateway.plugin.filter.BaseGlobalFilter;
import com.sinosdx.common.gateway.utils.ReactiveAddrUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;


/**
 * @author pengjiahu
 * @date 2021-06-18 00:43
 * @description Mono.defer会从此filter开始，重新执行一遍它后面的其他filter，一般我们会添加一些认证或鉴权的 GlobalFilter ，
 * 就需要在这些filter里用ServerWebExchangeUtils.isAlreadyRouted(exchange) 方法去判断是否重复执行，否则可能会执行二次重复操作，
 * 所以建议使用fromRunnable 避免这种情况。
 */
@Slf4j
@Component
public class RequestPrintGlobalFilter extends BaseGlobalFilter {

    @Override
    public int getOrder() {
        return FilterOrderEnum.G_REQUEST_PRINT.getOrder();
    }

    @Override
    public Mono<Void> customFilter(ServerWebExchange exchange, GatewayFilterChain chain) {
        ServerHttpRequest req = exchange.getRequest();
        Long startTime = System.currentTimeMillis();
        final String requestIp = ReactiveAddrUtil.getRemoteAddr(req);
        return chain.filter(exchange).then(Mono.fromRunnable(() -> {
            Long endTime = System.currentTimeMillis();
            if (log.isDebugEnabled()) {
                log.debug("Request - ClientIP:[{}],path:[{}],time:[{}]",
                        requestIp, req.getURI().getRawPath(), (endTime - startTime) + "ms");
            }
        }));
    }
}
