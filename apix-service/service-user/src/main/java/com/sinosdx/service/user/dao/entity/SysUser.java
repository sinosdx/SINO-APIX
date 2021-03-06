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
package com.sinosdx.service.user.dao.entity;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableName;
import com.sinosdx.common.base.base.entity.Entity;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;

import java.util.List;

/**
 * @author zhuangyang
 * @date 2020/11/23
 */
@Getter
@Setter
@EqualsAndHashCode(callSuper = true)
@ToString(callSuper = true)
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ApiModel(value = "系统用户信息表")
@TableName("sys_user")
public class SysUser extends Entity<Integer> {
    private static final long serialVersionUID = 7759766592035091118L;

    @ApiModelProperty("用户账号名")
    private String account;

    @ApiModelProperty("用户姓名")
    private String username;

    @ApiModelProperty("性别")
    private Integer gender;

    @ApiModelProperty("手机号")
    private String mobile;

    @ApiModelProperty("email账号")
    private String email;

    @ApiModelProperty("头像名称")
    private String avatarName;

    @ApiModelProperty("头像地址")
    private String avatarPath;

    @ApiModelProperty("用户来源")
    private String source;

    @ApiModelProperty("状态")
    private Boolean enabled;

    @TableField(exist = false)
    private Integer roleId;

    @TableField(exist = false)
    private String roleName;

    @TableField(exist = false)
    private String password;

    @TableField(exist = false)
    private List<SysRoleEntity> roles;

    @TableField(exist = false)
    private Integer orgId;

    @TableField(exist = false)
    private String orgName;

}
