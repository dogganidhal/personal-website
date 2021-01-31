package com.ndogga.personal.website.model.entity

import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.GeneratedValue
import javax.persistence.ManyToOne
import javax.persistence.Column


/**
 * @author nidhaldogga
 * @created 30/01/2021 10:06
 * SoftKall™ All rights reserved.
 */


@Entity(name = "api_key")
data class ApiKeyEntity(
    @Id
    @GeneratedValue
    val id: Int? = null,
    @ManyToOne
    val user: UserEntity,
    @Column
    val key: String
)
