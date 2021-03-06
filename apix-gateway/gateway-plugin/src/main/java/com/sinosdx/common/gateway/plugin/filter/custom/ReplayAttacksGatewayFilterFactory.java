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
package com.sinosdx.common.gateway.plugin.filter.custom;


import cn.hutool.core.date.DateTime;
import com.sinosdx.common.base.result.R;
import com.sinosdx.common.gateway.entity.BaseConfig;
import com.sinosdx.common.gateway.plugin.enums.FilterOrderEnum;
import com.sinosdx.common.gateway.plugin.enums.FilterResultCodeEnum;
import com.sinosdx.common.gateway.plugin.filter.BaseGatewayFilter;
import com.sinosdx.common.gateway.plugin.filter.custom.ReplayAttacksGatewayFilterFactory.Config;
import com.sinosdx.common.gateway.plugin.utils.HttpUtil;
import java.net.URI;
import java.util.Objects;
import java.util.concurrent.TimeUnit;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

/**
 * 防重放攻击
 *
 * @author pengjiahu
 * @date 2021-06-18 00:43
 * @description
 */
@Slf4j
@Component
public class ReplayAttacksGatewayFilterFactory extends BaseGatewayFilter<Config> {

    private static final String TIMESTAMP = "timestamp";
    private static final String NONCE = "nonce";
    @Autowired
    private StringRedisTemplate stringRedisTemplate;

    public ReplayAttacksGatewayFilterFactory() {
        super(Config.class);
    }

    @Override
    public Mono<Void> customApply(ServerWebExchange exchange, GatewayFilterChain chain, Config c) {
        ServerHttpRequest req = exchange.getRequest();
        HttpHeaders headers = req.getHeaders();
        // timestamp 10位  nonce
        String timestamp = headers.getFirst(TIMESTAMP);
        String nonce = headers.getFirst(NONCE);
        long seq = 5000L; // 毫秒  同时为nonce 的过期时间
        URI uri = req.getURI();
        String key = uri.getHost()+"-"+uri.getPort()+"-"+uri.getPath(); //TODO  取值问题？ 暂时init
        ValueOperations<String, String> stringValueOperations = stringRedisTemplate.opsForValue();
        // 时间戳
        if (Objects.nonNull(timestamp)) {
            // 多长时间内允许再次请求 毫秒
            if (DateTime.of(Long.parseLong(timestamp) * 1000 + seq).isAfter(DateTime.now())) {
                return HttpUtil.response(exchange, HttpStatus.TOO_MANY_REQUESTS,
                        R.fail(FilterResultCodeEnum.INTERFACE_LIMITED));
            }
        }
//        else {
//            return HttpUtil.response(exchange, HttpStatus.TOO_MANY_REQUESTS,
//                    R.fail(FilterResultCodeEnum.TIMESTAMP_EMPTY));
//        }
        // 随机数
        if (Objects.nonNull(nonce)) {
            String nonc = stringValueOperations.get(key);
            if (StringUtils.isNotEmpty(nonc)) {
                return HttpUtil.response(exchange, HttpStatus.TOO_MANY_REQUESTS,
                        R.fail(FilterResultCodeEnum.INTERFACE_LIMITED));
            }
            stringValueOperations.set(key, nonce, seq, TimeUnit.MILLISECONDS);
        }
//        else {
//            return HttpUtil.response(exchange, HttpStatus.TOO_MANY_REQUESTS,
//                    R.fail(FilterResultCodeEnum.NONCE_EMPTY));
//        }
        return chain.filter(exchange);
    }

    @Override
    public int setOrder() {
        return FilterOrderEnum.C_REPLAY_ATTACKS.getOrder();
    }

    @Data
    @EqualsAndHashCode(callSuper = true)
    @ToString(callSuper = true)
    public static class Config extends BaseConfig {

        private String ip;

    }

}
