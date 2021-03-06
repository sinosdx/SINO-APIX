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
package com.sinosdx.service.authentication.controller;

import com.sinosdx.common.base.result.R;
import com.sinosdx.service.authentication.controller.dto.GenerateTokenDto;
import com.sinosdx.service.authentication.dao.entity.ClientAppSecret;
import com.sinosdx.service.authentication.service.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author wendy
 * @date 2022/1/6
 */
@RestController
@RequestMapping("/auth/token")
public class TokenController {

    @Autowired
    private TokenService tokenService;

    /**
     * 保存客户端申请token的secretKey
     *
     * @param secret
     * @return
     */
    @PostMapping("/secretKey")
    public R<Object> saveClientAppSecretKey(@RequestBody ClientAppSecret secret) {
        return tokenService.saveClientAppSecretKey(secret);
    }

    /**
     * 给订阅方生成jwt
     *
     * @param generateTokenDto
     * @return
     */
    @PostMapping("/jwt")
    public R<Object> generateJwt(@RequestBody GenerateTokenDto generateTokenDto) {
        return tokenService.generateJwt(generateTokenDto);
    }

    /**
     * 查询客户端的secret
     *
     * @param secretKey
     * @return
     */
    @GetMapping("/secret")
    public R<ClientAppSecret> queryClientSecret(@RequestParam String secretKey) {
        return tokenService.queryBySecret(secretKey);
    }

    /**
     * 给订阅方生成basic_token
     *
     * @param generateTokenDto
     * @return
     */
    @PostMapping("/basic")
    public R<Object> generateBasicToken(@RequestBody GenerateTokenDto generateTokenDto) {
        return tokenService.generateBasicToken(generateTokenDto);
    }

    /**
     * 查询客户端的secret
     *
     * @param appCode
     * @return
     */
    @GetMapping("/secret/list")
    public R<List<ClientAppSecret>> querySecretByAppCode(@RequestParam String appCode) {
        return tokenService.querySecretByAppCode(appCode);
    }

    /**
     * 删除secret
     *
     * @param appCode
     * @return
     */
    @DeleteMapping("/secret")
    public R<Object> deleteClientAppSecret(@RequestParam String appCode) {
        return tokenService.deleteClientAppSecret(appCode);
    }
}
