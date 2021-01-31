package com.ndogga.personal.website.model.domain

import com.fasterxml.jackson.annotation.JsonBackReference
import com.fasterxml.jackson.annotation.JsonIgnore
import com.fasterxml.jackson.annotation.JsonManagedReference
import java.time.LocalDate
import javax.persistence.*


/**
 *  @author Nidhal Dogga
 *  @created 1/30/2021 02:13
 *  SoftKall™ All rights reserved.
 */


data class Experience(
    @field:JsonIgnore
    val id: Int,
    val jobTitle: String,
    val companyName: String,
    val companyUrl: String,
    val beginDate: LocalDate,
    val endDate: LocalDate,
    val missions: Collection<String>
)
