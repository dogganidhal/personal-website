package com.ndogga.personal.website.model.repository

import com.ndogga.personal.website.model.entity.SkillSetEntity
import org.springframework.data.jpa.repository.JpaRepository


/**
 * @author nidhaldogga
 * @created 30/01/2021 10:10
 * SoftKall™ All rights reserved.
 */


interface SkillSetRepository : JpaRepository<SkillSetEntity, Int> {
    fun findAllByUserId(userId: Int): Collection<SkillSetEntity>
}
