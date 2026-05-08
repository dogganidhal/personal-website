pluginManagement {
    val kotlinVersion: String by settings
    val springBootVersion: String by settings
    val springBootDependencyManagementVersion: String by settings

    plugins {
        kotlin("jvm") version kotlinVersion
        kotlin("kapt") version kotlinVersion
        kotlin("plugin.jpa") version kotlinVersion
        kotlin("plugin.noarg") version kotlinVersion
        kotlin("plugin.allopen") version kotlinVersion
        kotlin("plugin.spring") version kotlinVersion
        id("org.springframework.boot") version springBootVersion
        id("io.spring.dependency-management") version springBootDependencyManagementVersion
    }
}

rootProject.name = "personal-website-api"
