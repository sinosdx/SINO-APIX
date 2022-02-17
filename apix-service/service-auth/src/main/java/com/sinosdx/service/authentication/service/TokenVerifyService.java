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
package com.sinosdx.service.authentication.service;

import com.sinosdx.service.authentication.controller.vo.TokenInfo;
import com.sinosdx.service.authentication.result.R;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

/**
 * @author wendy
 * @date 2020/12/3
 */
@RestController
public interface TokenVerifyService {

    /**
     * 校验token
     *
     * @param params
     * @return
     */
    @PostMapping("/auth/token/verify")
    R<Object> tokenVerify(@RequestBody Map<String, String> params);

    /**
     * 解析token
     *
     * @param params
     * @return
     */
    @PostMapping("/auth/token/convert")
    R<TokenInfo> convertToken(@RequestBody Map<String, String> params);
}
