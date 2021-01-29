package com.ndogga.personal.website.configuration

import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.boot.context.properties.ConstructorBinding
import org.springframework.boot.context.properties.NestedConfigurationProperty


/**
 *  @author Nidhal Dogga
 *  @created 1/29/2021 16:25
 *  SoftKall™ All rights reserved.
 */


@ConstructorBinding
@ConfigurationProperties(prefix = "com.ndogga")
data class WebConfigurationProperties(
    @NestedConfigurationProperty
    val mail: MailConfigurationProperties
)


data class MailConfigurationProperties(
    val recipient: String
)
