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
package com.sinosdx.service.authentication.consumer;

import com.alibaba.fastjson.JSONObject;
import com.sinosdx.common.base.result.R;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Map;

/**
 * @author wendy
 * @date 2020/12/4
 */
@FeignClient(value = "service-auth")
public interface LoginFeign {

    /**
     * 认证服务获取token
     *
     * @param paramMap
     * @return
     */
    @PostMapping("/oauth/token")
    JSONObject requestToken(@RequestParam Map<String, String> paramMap);
}
