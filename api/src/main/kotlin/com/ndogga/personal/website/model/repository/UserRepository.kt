package com.ndogga.personal.website.model.repository

import com.ndogga.personal.website.model.entity.UserEntity
import org.springframework.data.jpa.repository.JpaRepository


/**
 * @author nidhaldogga
 * @created 30/01/2021 10:07
 * SoftKall™ All rights reserved.
 */


interface UserRepository : JpaRepository<UserEntity, Int>
