package com.ndogga.personal.website.configuration

import io.swagger.v3.oas.models.OpenAPI
import org.springframework.boot.context.properties.EnableConfigurationProperties
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration


/**
 *  @author Nidhal Dogga
 *  @created 1/29/2021 12:44
 *  SoftKall™ All rights reserved.
 */


@Configuration
@EnableConfigurationProperties(WebConfigurationProperties::class)
class WebConfiguration {

    @Bean
    fun openApi() = OpenAPI()

}
