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
import com.sinosdx.service.authentication.result.R;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * @author wendy
 * @date 2020/12/3
 */
@FeignClient("service-user")
public interface SysUserServiceFeign {

    /**
     * 用户登录使用
     *
     * @param mobile phone或者account
     * @return "data": {
     *         "account": "zhuangyang",
     *         "oldPassword": "",
     *         "password": "123456",
     *         "phone": "15055403290",
     *         "qqOpenId": "",
     *         "wxOpenId": ""
     *     }
     */
    @GetMapping(value = "/user/sys/login-info")
    R<Object> userLogin(@RequestParam("mobile") String mobile);

    /**
     * 当前登录用户的菜单
     *
     * @param userId
     * @return
     */
    @GetMapping("/menus/user-id/{userId}/menus")
    R<Object> findMyMenu(@PathVariable Integer userId);

    /**
     * 更新用户登录时间
     *
     * @param paramJson
     * @return
     */
    @PutMapping("/user/sys/login")
    R<Object> updateSysLogin(@RequestBody JSONObject paramJson);

}
