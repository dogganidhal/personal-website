package com.ndogga.personal.website.model.entity

import javax.persistence.*


/**
 *  @author Nidhal Dogga
 *  @created 1/30/2021 02:18
 *  SoftKall™ All rights reserved.
 */


@Entity
data class SkillSet(
    @Id
    @GeneratedValue
    val id: Int? = null,
    @Column
    val title: String,
    @ElementCollection
    val skills: Collection<String>,
    @Column
    val iconUrl: String,
    @ManyToOne
    val user: User
)
