package com.ndogga.personal.website.model.repository

import com.ndogga.personal.website.model.entity.EducationEntity
import org.springframework.data.jpa.repository.JpaRepository


/**
 * @author nidhaldogga
 * @created 30/01/2021 10:10
 * SoftKall™ All rights reserved.
 */


interface EducationRepository : JpaRepository<EducationEntity, Int> {
    fun findAllByUserId(userId: Int): Collection<EducationEntity>
}
