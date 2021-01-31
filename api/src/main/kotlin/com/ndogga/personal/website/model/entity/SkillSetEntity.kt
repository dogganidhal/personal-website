package com.ndogga.personal.website.model.entity

import com.fasterxml.jackson.annotation.JsonIgnore
import javax.persistence.*


/**
 *  @author Nidhal Dogga
 *  @created 1/30/2021 02:18
 *  SoftKall™ All rights reserved.
 */


@Entity(name = "skill_set")
data class SkillSetEntity(
    @Id
    @GeneratedValue
    val id: Int? = null,
    @Column
    val title: String,
    @ElementCollection(fetch = FetchType.EAGER)
    val skills: Set<String>,
    @Column
    val iconUrl: String,
    @ManyToOne
    val user: UserEntity
)
