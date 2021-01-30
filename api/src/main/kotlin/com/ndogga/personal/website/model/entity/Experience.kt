package com.ndogga.personal.website.model.entity

import java.time.LocalDate
import javax.persistence.*


/**
 *  @author Nidhal Dogga
 *  @created 1/30/2021 02:13
 *  SoftKall™ All rights reserved.
 */


@Entity
data class Experience(
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
    val endDate: LocalDate,
    @ElementCollection
    val missions: Collection<String>,
    @ManyToOne
    val user: User
)
