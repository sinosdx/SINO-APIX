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
import com.sinosdx.service.management.dao.entity.Application;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

/**
 * @author wendy
 * @date 2020/12/8
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ApplicationVo implements Serializable {
    private static final long serialVersionUID = 3911550422718722546L;

    @JSONField(serialzeFeatures = SerializerFeature.WriteMapNullValue)
    private Integer appId;
    private String appName;
    private String appCode;
    private String productId;
    private List<String> label;
    private String description;
    @JSONField(serialzeFeatures = SerializerFeature.WriteMapNullValue)
    private String markdown;
    @JSONField(serialzeFeatures = SerializerFeature.WriteMapNullValue)
    private String iconUrl;
    @JSONField(serialzeFeatures = SerializerFeature.WriteMapNullValue)
    private String isPublished;
    @JSONField(format = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime publishDate;
    @JSONField(format = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime creationDate;
    private String creationByUsername;
    @JSONField(format = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime lastUpdateDate;
    private String lastUpdatedByUsername;
    private String provider;

    public ApplicationVo(Application application) {
        this.appId = application.getId() == null ? null : application.getId();
        this.appName = application.getName();
        this.appCode = application.getCode();
        this.productId = application.getProductId();
        this.label = Arrays.stream(application.getLabel().split("/")).filter(Objects::nonNull).collect(Collectors.toList());
        this.description = application.getDescription();
        this.markdown = application.getMarkdown();
        this.iconUrl = application.getIconUrl();
        this.isPublished = application.getIsPublished();
        this.publishDate = application.getPublishDate();
        this.creationDate = application.getCreationDate();
        this.creationByUsername = application.getCreationByUsername();
        this.lastUpdateDate = application.getLastUpdateDate();
        this.lastUpdatedByUsername = application.getLastUpdatedByUsername();
        this.provider = application.getProvider();
    }
}
