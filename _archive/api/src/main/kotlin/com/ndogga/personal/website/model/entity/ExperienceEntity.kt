package com.ndogga.personal.website.model.entity

import com.fasterxml.jackson.annotation.JsonIgnore
import java.time.LocalDate
import javax.persistence.*


/**
 *  @author Nidhal Dogga
 *  @created 1/30/2021 02:13
 *  SoftKall™ All rights reserved.
 */


@Entity(name = "experience")
data class ExperienceEntity(
    @Id
    @GeneratedValue
    val id: Int? = null,
    @Column
    val jobTitle: String,
    @Column
    val companyName: String,
    @Column
    val companyUrl: String,
    @Column
    val beginDate: LocalDate,
    @Column
    val endDate: LocalDate?,
    @ElementCollection(fetch = FetchType.EAGER)
    val missions: Set<String>,
    @ManyToOne
    val user: UserEntity
)
