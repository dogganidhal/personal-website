import org.jetbrains.kotlin.gradle.tasks.KotlinCompile
import org.springframework.boot.gradle.tasks.bundling.BootBuildImage

plugins {
    id("idea")
    kotlin("jvm")
    kotlin("kapt")
    kotlin("plugin.spring")
    id("org.springframework.boot")
    id("io.spring.dependency-management")
}

group = "com.ndogga"
version = "0.0.1-SNAPSHOT"
java.sourceCompatibility = JavaVersion.VERSION_15

configurations {
    compileOnly {
        extendsFrom(configurations.annotationProcessor.get())
    }
}

repositories {
    mavenCentral()
}

dependencies {
    val openApiVersion: String by project
    val mustacheVersion: String by project

    implementation("org.springframework.boot:spring-boot-starter-webflux")
    implementation("com.fasterxml.jackson.module:jackson-module-kotlin")
    implementation("io.projectreactor.kotlin:reactor-kotlin-extensions")
    implementation("org.jetbrains.kotlin:kotlin-reflect")
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-reactor")

    implementation("org.springframework.boot:spring-boot-starter-data-jpa")
    implementation("org.springframework.boot:spring-boot-starter-mail")
    implementation("org.springframework.boot:spring-boot-starter-validation")

    implementation("com.github.spullara.mustache.java:compiler:$mustacheVersion")

    implementation("org.springdoc:springdoc-openapi-kotlin:$openApiVersion")
    implementation("org.springdoc:springdoc-openapi-webflux-ui:$openApiVersion")
    implementation("org.springdoc:springdoc-openapi-webflux-core:$openApiVersion")

    developmentOnly("org.springframework.boot:spring-boot-devtools")

    kapt("org.springframework.boot:spring-boot-configuration-processor")

    implementation("org.flywaydb:flyway-core")

    implementation("org.xerial:sqlite-jdbc:3.32.3.2")
    implementation("com.github.gwenn:sqlite-dialect:0.1.0")

    testImplementation("org.springframework.boot:spring-boot-starter-test")
    testImplementation("io.projectreactor:reactor-test")
}

tasks.withType<KotlinCompile> {
    kotlinOptions {
        freeCompilerArgs = listOf("-Xjsr305=strict")
        jvmTarget = "15"
    }
}

tasks.withType<Test> {
    useJUnitPlatform()
}

idea {
    module {
        sourceDirs = sourceDirs + file("build/tmp/kapt3/classes/main")
        generatedSourceDirs = sourceDirs + file("build/tmp/kapt3/classes/main")
    }
}

tasks.withType<BootBuildImage> {
    imageName = "docker.nexus.ndogga.com/personal-website-api"
}
