package com.ndogga.personal.website.model.entity

import com.fasterxml.jackson.annotation.JsonIgnore
import javax.persistence.*


/**
 *  @author Nidhal Dogga
 *  @created 1/30/2021 02:11
 *  SoftKall™ All rights reserved.
 */


@Entity(name = "education")
data class EducationEntity(
    @Id
    @GeneratedValue
    val id: Int? = null,
    @Column
    val degreeTitle: String,
    @Column
    val instituteName: String,
    @Column
    val instituteUrl: String,
    @Column
    val beginYear: Int,
    @Column
    val graduationYear: Int?,
    @ManyToOne
    @get:JsonIgnore
    val user: UserEntity
)
