package com.ndogga.personal.website.service.impl

import com.ndogga.personal.website.model.domain.*
import com.ndogga.personal.website.model.entity.UserEntity
import com.ndogga.personal.website.model.repository.*
import com.ndogga.personal.website.service.UserService
import com.ndogga.personal.website.utils.cast
import com.ndogga.personal.website.utils.runIO
import org.springframework.stereotype.Service
import java.util.UUID


@Service
class UserServiceImpl(
    private val apiKeyRepository: ApiKeyRepository,
    private val userRepository: UserRepository,
    private val educationRepository: EducationRepository,
    private val experienceRepository: ExperienceRepository,
    private val skillSetRepository: SkillSetRepository,
    private val userDescriptionRepository: UserDescriptionRepository
) : UserService {

    override suspend fun getUser(apiKey: UUID): User? = getUserFromApiKey(apiKey) { cast() }

    override suspend fun getUserExperience(apiKey: UUID): Collection<Experience>? = getUserFromApiKey(apiKey) {
        experienceRepository
            .findAllByUserId(id!!)
            .cast<Experience>()
            .reversed()
    }

    override suspend fun getUserEducation(apiKey: UUID): Collection<Education>? = getUserFromApiKey(apiKey) {
        educationRepository
            .findAllByUserId(id!!)
            .cast<Education>()
            .reversed()
    }

    override suspend fun getUserSkillSets(apiKey: UUID): Collection<SkillSet>? = getUserFromApiKey(apiKey) {
        skillSetRepository
            .findAllByUserId(id!!)
            .cast()
    }

    override suspend fun getUserDescription(apiKey: UUID): UserDescription? = getUserFromApiKey(apiKey) {
        userDescriptionRepository
            .findByUserId(id!!)
            ?.cast()
    }

    private suspend fun <T> getUserFromApiKey(key: UUID, closure: UserEntity.() -> T): T? = runIO {
        apiKeyRepository
            .findByKey(key.toString())
            ?.user
            ?.let(closure)
    }
}
