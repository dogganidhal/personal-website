package com.ndogga.personal.website.web.controller

import com.ndogga.personal.website.model.domain.Education
import com.ndogga.personal.website.model.domain.Experience
import com.ndogga.personal.website.model.domain.SkillSet
import com.ndogga.personal.website.service.UserService
import org.springframework.web.bind.annotation.*
import java.util.UUID


/**
 * @author nidhaldogga
 * @created 30/01/2021 10:05
 * SoftKall™ All rights reserved.
 */


@CrossOrigin
@RestController
@RequestMapping("/api/resume")
class ResumeController(
    private val userService: UserService
) {

    @GetMapping("/education")
    suspend fun getEducation(@RequestParam("api-key") apiKey: UUID): Collection<Education>? = userService
        .getUserEducation(apiKey)

    @GetMapping("/experience")
    suspend fun getExperience(@RequestParam("api-key") apiKey: UUID): Collection<Experience>? = userService
        .getUserExperience(apiKey)

    @GetMapping("/skill-sets")
    suspend fun getSkillSets(@RequestParam("api-key") apiKey: UUID): Collection<SkillSet>? = userService
        .getUserSkillSets(apiKey)

}
