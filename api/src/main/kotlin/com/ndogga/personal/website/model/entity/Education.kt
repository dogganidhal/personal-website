package com.ndogga.personal.website.model.entity

import javax.persistence.*


/**
 *  @author Nidhal Dogga
 *  @created 1/30/2021 02:11
 *  SoftKall™ All rights reserved.
 */


@Entity
data class Education(
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
    val graduationYear: Int,
    @ManyToOne
    val user: User
)
