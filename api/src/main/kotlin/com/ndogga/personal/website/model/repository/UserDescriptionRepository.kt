package com.ndogga.personal.website.model.repository

import com.ndogga.personal.website.model.entity.UserDescriptionEntity
import com.ndogga.personal.website.model.entity.UserEntity
import org.springframework.data.jpa.repository.JpaRepository


/**
 * @author nidhaldogga
 * @created 29/03/2021 10:58
 * SoftKall™ All rights reserved.
 */


interface UserDescriptionRepository : JpaRepository<UserDescriptionEntity, Int> {
    fun findByUserId(id: Int): UserDescriptionEntity?
}
