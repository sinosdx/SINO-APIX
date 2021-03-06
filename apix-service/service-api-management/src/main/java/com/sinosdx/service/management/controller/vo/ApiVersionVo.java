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
package com.sinosdx.service.management.controller.vo;

import com.alibaba.fastjson.annotation.JSONField;
import com.alibaba.fastjson.serializer.SerializerFeature;
import com.sinosdx.service.management.dao.entity.ApiVersion;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * @author wendy
 * @date 2020/12/8
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ApiVersionVo implements Serializable {
    private static final long serialVersionUID = -7113454164502943141L;

    @JSONField(serialzeFeatures = SerializerFeature.WriteMapNullValue)
    private Integer apiId;
    private Integer apiVersionId;
    private String apiName;
    private String description;
    private String markdown;
    private String domain;
    private String url;
    private String requestMethod;
    private String version;
    @JSONField(serialzeFeatures = SerializerFeature.WriteMapNullValue)
    private String isPublished;
    @JSONField(format = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime creationDate;
    private String creationByUsername;
    @JSONField(format = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime lastUpdateDate;
    private String lastUpdatedByUsername;

    public ApiVersionVo(ApiVersion apiVersion) {
        this.apiId = apiVersion.getApiId();
        this.apiVersionId = apiVersion.getId();
        this.apiName = apiVersion.getApiName();
        this.description = apiVersion.getDescription();
        this.markdown = apiVersion.getMarkdown();
        this.domain = apiVersion.getDomain();
        this.url = apiVersion.getUrl();
        this.requestMethod = apiVersion.getRequestMethod();
        this.version = apiVersion.getVersion();
        this.isPublished = apiVersion.getIsPublished();
        this.creationDate = apiVersion.getCreationDate();
        this.creationByUsername = apiVersion.getCreationByUsername();
        this.lastUpdateDate = apiVersion.getLastUpdateDate();
        this.lastUpdatedByUsername = apiVersion.getLastUpdatedByUsername();
    }
}
