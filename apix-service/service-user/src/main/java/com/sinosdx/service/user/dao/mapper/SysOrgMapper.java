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
package com.sinosdx.service.user.dao.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.sinosdx.service.user.dao.entity.SysOrg;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author hwd
 * @date 2021-09-17 16:06
 * @description
 */
@Repository
public interface SysOrgMapper extends BaseMapper<SysOrg> {

    /**
     * 查询组织列表
     *
     * @param name
     * @param userIdList
     * @return
     */
    List<Object> queryOrgList(@Param("name") String name,
                              @Param("userIdList") List<Integer> userIdList,
                              @Param("limit") Integer limit,
                              @Param("offset") Integer offset);

}
