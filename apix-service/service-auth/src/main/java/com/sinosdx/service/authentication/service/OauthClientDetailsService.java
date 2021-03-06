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

import com.sinosdx.service.authentication.dao.entity.OauthClientDetails;
import com.sinosdx.service.authentication.result.R;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * @author wendy
 * @date 2020/12/3
 */
@RestController
public interface OauthClientDetailsService {

    /**
     * 创建新客户端（客户端认证使用）
     *
     * @param oauthClientDetail
     * @return
     */
    @PostMapping("/auth/oauth_client/create")
    R<Object> createOAuthClientDetail(@RequestBody OauthClientDetails oauthClientDetail);

    /**
     * 删除认证客户端
     *
     * @param clientId
     *
     * @return
     */
    @DeleteMapping("/auth/oauth_client/delete/{clientId}")
    R<Object> deleteOAuthClientDetail(@PathVariable("clientId") String clientId);

    /**
     * 查询client信息
     *
     * @param clientId
     * @return
     */
    @GetMapping("/auth/oauth_client/{clientId}")
    R<OauthClientDetails> queryByClientId(@PathVariable("clientId") String clientId);
}
