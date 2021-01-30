package com.ndogga.personal.website.model.entity

import javax.persistence.*


/**
 *  @author Nidhal Dogga
 *  @created 1/30/2021 02:35
 *  SoftKall™ All rights reserved.
 */


@Entity
data class User(
    @Id
    @GeneratedValue
    val id: Int? = null,
    @Column
    val fullName: String,
    @Column
    val position: String,
    @OneToMany
    val education: Collection<Education>,
    @OneToMany
    val experience: Collection<Experience>,
    @OneToMany
    val skillSets: Collection<SkillSet>
)
