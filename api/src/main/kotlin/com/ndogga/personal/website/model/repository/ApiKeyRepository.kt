package com.ndogga.personal.website.model.repository

import com.ndogga.personal.website.model.entity.ApiKeyEntity
import org.springframework.data.jpa.repository.JpaRepository
import java.util.*


/**
 * @author nidhaldogga
 * @created 30/01/2021 10:08
 * SoftKall™ All rights reserved.
 */


interface ApiKeyRepository : JpaRepository<ApiKeyEntity, Int> {
    fun findByKey(key: String): ApiKeyEntity?
}
