package com.ndogga.personal.website.service

import com.ndogga.personal.website.model.domain.Education
import com.ndogga.personal.website.model.domain.Experience
import com.ndogga.personal.website.model.domain.SkillSet
import com.ndogga.personal.website.model.domain.User
import java.util.*


/**
 * @author nidhaldogga
 * @created 30/01/2021 10:08
 * SoftKall™ All rights reserved.
 */


interface UserService {
    suspend fun getUser(apiKey: UUID): User?
    suspend fun getUserExperience(apiKey: UUID): Collection<Experience>?
    suspend fun getUserEducation(apiKey: UUID): Collection<Education>?
    suspend fun getUserSkillSets(apiKey: UUID): Collection<SkillSet>?
}
