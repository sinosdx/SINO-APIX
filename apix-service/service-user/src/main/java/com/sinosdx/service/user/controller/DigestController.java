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
package com.sinosdx.service.user.controller;

import com.alibaba.fastjson.JSONObject;
import com.sinosdx.common.base.result.R;
import com.sinosdx.service.user.enums.ResultCodeEnum;
import com.sinosdx.service.user.service.UserDigestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * @author wendy
 * @date 2021/6/15
 */
@RestController
@RequestMapping("/user/digest")
public class DigestController {

    @Autowired
    private UserDigestService userDigestService;

    /**
     * 获取digestKey
     *
     * @param jwt
     * @param data
     * @return
     */
    @PostMapping("/key")
    public R<String> getUserDigestKey(@RequestHeader(name = "JWT", required = true) String jwt,
                                      @RequestBody JSONObject data) {
        return userDigestService.getUserDigestKey(jwt, data);
    }

    /**
     * 根据digest获取用户信息
     *
     * @param digestKey
     * @return
     */
    @GetMapping("/{digestKey}")
    public R<JSONObject> getUserDigestData(@PathVariable(name = "digestKey") String digestKey) {
        return userDigestService.getUserDigestData(digestKey);
    }

    /**
     * 获取用户和集群信息
     *
     * @param data
     * @return
     */
    @PostMapping("/actions")
    public R<JSONObject> getRegionAndUserInfo(@RequestBody JSONObject data) {
        if (!data.containsKey("region") || !data.containsKey("sk") || !data.containsKey("digestKey")) {
            return R.fail(ResultCodeEnum.PARAM_NOT_COMPLETE);
        }

        return userDigestService.getRegionAndUserInfo(data.getString("region"),
                data.getString("sk"),
                data.getString("digestKey"));
    }

    /**
     * 区分c01和csp2.0请求获取digestKey
     *
     * @param data
     * @return
     */
    @PostMapping("/key/proxy")
    public R<Object> getDigestKeyForProxyGateway(@RequestBody JSONObject data) {
        return userDigestService.getDigestKeyForProxyGateway(data.getString("jwt"),
                data.getString("encrypt"));
    }
}
