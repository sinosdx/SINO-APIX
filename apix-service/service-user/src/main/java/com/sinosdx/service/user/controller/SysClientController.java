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

import com.sinosdx.common.base.result.R;
import com.sinosdx.service.user.dao.entity.SysUser;
import com.sinosdx.service.user.service.SysClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author wendy
 * @date 2021/12/21
 */
@RestController
@RequestMapping("/user/sys")
public class SysClientController {

    @Autowired
    private SysClientService sysClientService;

    /**
     * 根据用户id查询client
     *
     * @param sysUserId
     * @return
     */
    @GetMapping("/client")
    public R<Object> queryClientByUserId(@RequestParam Integer sysUserId) {
        return sysClientService.queryClientByUserId(sysUserId);
    }

    /**
     * 根据clientId查询user
     *
     * @param sysClientId
     * @return
     */
    @GetMapping()
    public R<SysUser> queryUserByClientId(@RequestParam Integer sysClientId) {
        return sysClientService.queryUserByClientId(sysClientId);
    }
}
