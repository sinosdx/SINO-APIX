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
package com.sinosdx.common.gateway.plugin.utils;

import com.sinosdx.common.base.result.R;
import com.sinosdx.common.base.result.enums.BaseEnum;
import com.sinosdx.common.gateway.plugin.entity.ResponseInfo;
import com.sinosdx.common.gateway.utils.GzipUtil;
import com.sinosdx.common.toolkit.common.LogUtil;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.concurrent.atomic.AtomicReference;
import java.util.function.Consumer;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.reactivestreams.Publisher;
import org.springframework.core.io.buffer.DataBuffer;
import org.springframework.core.io.buffer.DataBufferFactory;
import org.springframework.core.io.buffer.DataBufferUtils;
import org.springframework.core.io.buffer.DefaultDataBufferFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.http.server.reactive.ServerHttpResponse;
import org.springframework.http.server.reactive.ServerHttpResponseDecorator;
import org.springframework.util.AntPathMatcher;
import org.springframework.util.CollectionUtils;
import org.springframework.util.ObjectUtils;
import org.springframework.util.PathMatcher;
import org.springframework.web.reactive.resource.ResourceUrlProvider;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

/**
 * http工具类
 *
 * @author pengjiahu
 * @date 2021-06-08 15:48
 * @description
 */
@Slf4j
public class HttpUtil {

    private static final String GET = "GET";
    private static final PathMatcher PATH_MATCHER = new AntPathMatcher();
    private static final ResourceUrlProvider RESOURCE_URL_PROVIDER = new ResourceUrlProvider();

    public static PathMatcher getPathMatcher() {
        return PATH_MATCHER;
    }

    public static ResourceUrlProvider getResourceUrlProvider() {
        return RESOURCE_URL_PROVIDER;
    }

    /**
     * 构建错误的返回信息
     *
     * @param exchange
     * @param baseEnum
     * @return
     */
    public static Mono<Void> errorResponse(ServerWebExchange exchange, BaseEnum baseEnum) {
        return response(exchange, HttpStatus.INTERNAL_SERVER_ERROR, R.fail(baseEnum));
    }

    /**
     * 构建错误的返回信息
     *
     * @param exchange
     * @param baseEnum
     * @return
     */
    public static Mono<Void> error401(ServerWebExchange exchange, BaseEnum baseEnum) {
        return response(exchange, HttpStatus.UNAUTHORIZED, R.fail(baseEnum));
    }

    /**
     * 构建错误的返回信息
     *
     * @param exchange
     * @param baseEnum
     * @param params
     * @return
     */
    public static Mono<Void> errorResponse(ServerWebExchange exchange, BaseEnum baseEnum,
            Object... params) {
        return response(exchange, HttpStatus.INTERNAL_SERVER_ERROR, R.fail(baseEnum, params));
    }

    /**
     * 构建成功的返回信息
     *
     * @param exchange
     * @param baseEnum
     * @return
     */
    public static Mono<Void> successResponse(ServerWebExchange exchange, BaseEnum baseEnum) {
        return response(exchange, HttpStatus.OK, R.success(baseEnum));
    }

    /**
     * 构建成功的返回信息
     *
     * @param exchange
     * @param baseEnum
     * @param params
     * @return
     */
    public static Mono<Void> successResponse(ServerWebExchange exchange, BaseEnum baseEnum,
            Object... params) {
        return response(exchange, HttpStatus.OK, R.success(baseEnum, params));
    }

    /**
     * @param exchange
     * @param str
     * @return
     */
    public static Mono<Void> successResponse(ServerWebExchange exchange, String str) {
        return response(exchange, HttpStatus.OK, str);
    }


    /**
     * 自定义返回信息
     *
     * @param exchange
     * @param o
     * @return
     */
    public static Mono<Void> response(ServerWebExchange exchange, Object o) {
        return response(exchange, null, o);
    }

    /**
     * 自定义返回信息
     *
     * @param exchange
     * @param status
     * @param o
     * @return
     */
    @SneakyThrows
    public static Mono<Void> response(ServerWebExchange exchange, HttpStatus status, Object o) {
        ServerHttpResponse response = exchange.getResponse();
        if (ObjectUtils.isEmpty(o)) {
            o = R.fail("warn,response body is null!");
        }
        byte[] bits = o.toString().getBytes(StandardCharsets.UTF_8);
        DataBuffer buffer = response.bufferFactory().wrap(bits);
        if (status != null) {
            response.setStatusCode(status);
        }
        response.getHeaders().add(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE);
        return response.writeWith(Mono.just(buffer));
    }

    /**
     * 判断是否为静态资源
     *
     * @param uri
     * @param exchange
     * @return
     */
    public static Mono<Boolean> isStaticResources(String uri, ServerWebExchange exchange) {
        ResourceUrlProvider resourceUrlProvider = getResourceUrlProvider();
        Mono<String> staticUri = resourceUrlProvider.getForUriString(uri, exchange);
        return staticUri.hasElement();
    }

    /**
     * 判断路径是否与路径模式匹配
     *
     * @param patterns 路径模式数组
     * @param path     url
     * @return 是否匹配
     */
    public static boolean isPathMatch(String[] patterns, String path) {
        return isPathMatch(Arrays.asList(patterns), path);
    }

    /**
     * 判断路径是否与路径模式匹配
     *
     * @param patterns 路径模式字符串List
     * @param path     url
     * @return 是否匹配
     */
    public static boolean isPathMatch(List<String> patterns, String path) {
        PathMatcher pathMatcher = getPathMatcher();
        for (String pattern : patterns) {
            if (pathMatcher.match(pattern, path)) {
                return true;
            }
        }
        return false;
    }

    /**
     * 读取请求体内容
     *
     * @param request ServerHttpRequest
     * @return 请求体
     */
    public static String readRequestBody(ServerHttpRequest request) {
        HttpHeaders headers = request.getHeaders();
        MediaType mediaType = headers.getContentType();
        String method = request.getMethodValue().toUpperCase();
        if (Objects.nonNull(mediaType) && mediaType.equals(MediaType.MULTIPART_FORM_DATA)) {
            return "上传文件";
        } else {
            if (GET.equals(method)) {
                if (!request.getQueryParams().isEmpty()) {
                    return request.getQueryParams().toString();
                }
                return null;
            } else {
                AtomicReference<String> bodyString = new AtomicReference<>();
                request.getBody().subscribe(buffer -> {
                    byte[] bytes = new byte[buffer.readableByteCount()];
                    buffer.read(bytes);
                    DataBufferUtils.release(buffer);
                    bodyString.set(new String(bytes, com.sinosdx.common.toolkit.http.HttpUtil
                            .getMediaTypeCharset(mediaType)));
                });
                return bodyString.get();
            }
        }
    }

    /**
     * 获取返回结果,调用自定义消费
     *
     * @param exchange
     * @param consumer 自定义消费
     * @return
     */
    public static ServerHttpResponseDecorator getResponse(ServerWebExchange exchange, Consumer<ResponseInfo> consumer) {
        ServerHttpResponse originalResponse = exchange.getResponse();
        DataBufferFactory bufferFactory = originalResponse.bufferFactory();
        return new ServerHttpResponseDecorator(originalResponse) {
            @Override
            public Mono<Void> writeWith(Publisher<? extends DataBuffer> body) {
                Flux<? extends DataBuffer> fluxBody;
                try {
                    fluxBody = Flux.from(DataBufferUtils.join(body));
                } catch (Exception e) {
                    log.error("ServerHttpResponseDecorator Flux.from error!", e);
                    consumer.accept(ResponseInfo.builder().exchange(exchange).build());
                    return super.writeWith(body);
                }
                return super.writeWith(fluxBody.buffer().map(dataBuffers -> {
                    DataBufferFactory dataBufferFactory = new DefaultDataBufferFactory();
                    DataBuffer join = dataBufferFactory.join(dataBuffers);
                    byte[] content = new byte[join.readableByteCount()];
                    join.read(content);
                    DataBufferUtils.release(join);
                    int statusCode = 0;
                    String responseData = "";
                    HttpHeaders httpHeaders = exchange.getResponse().getHeaders();
                    try {
                        responseData = new String(content, StandardCharsets.UTF_8);
                        statusCode = Objects.requireNonNull(getStatusCode()).value();
                        List<String> strings = httpHeaders.get(HttpHeaders.CONTENT_ENCODING);
                        if (!CollectionUtils.isEmpty(strings) && strings.contains(GzipUtil.GZIP)) {
                            responseData = GzipUtil.getGzipContent(content, responseData);
                        } else {
                            responseData = new String(content, StandardCharsets.UTF_8);
                        }
                    } catch (Exception e) {
                        log.error("ServerHttpResponseDecorator writeWith error!", e);
                    } finally {
                        ResponseInfo responseInfo = ResponseInfo.builder()
                                .headers(com.sinosdx.common.gateway.utils.LogUtil.getHttpHeaders(httpHeaders))
                                .statusCode(statusCode)
                                .result(responseData)
                                .exchange(exchange)
                                .build();
                        LogUtil.debug(log, "ResponseDecorator result:{}", responseInfo);
                        consumer.accept(responseInfo);
                    }
                    return bufferFactory.wrap(content);
                }));
            }
        };
    }
}
