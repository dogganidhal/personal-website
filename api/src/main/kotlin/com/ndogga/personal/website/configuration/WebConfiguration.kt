package com.ndogga.personal.website.configuration

import io.swagger.v3.oas.models.OpenAPI
import org.springframework.boot.context.properties.EnableConfigurationProperties
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.cors.CorsConfiguration
import org.springframework.web.cors.reactive.CorsConfigurationSource
import org.springframework.web.cors.reactive.CorsWebFilter
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource


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

    @Bean
    fun corsConfigurationSource(): CorsConfigurationSource {
        val configuration = CorsConfiguration()
        configuration.allowedOriginPatterns = listOf("*")
        configuration.allowedMethods = listOf("GET")
        configuration.allowedHeaders = listOf("*")
        val source = UrlBasedCorsConfigurationSource()
        source.registerCorsConfiguration("/**", configuration)
        return source
    }

    @Bean
    fun corsWebFilter(): CorsWebFilter {
        val corsConfig = CorsConfiguration()
        corsConfig.allowedOriginPatterns = listOf("*")
        corsConfig.maxAge = 3600L
        corsConfig.addAllowedMethod("*")
        corsConfig.addAllowedHeader("*")
        val source = UrlBasedCorsConfigurationSource()
        source.registerCorsConfiguration("/**", corsConfig)
        return CorsWebFilter(source)
    }

}
