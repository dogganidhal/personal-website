package com.ndogga.personal.website.model.domain

import com.fasterxml.jackson.annotation.JsonBackReference
import com.fasterxml.jackson.annotation.JsonIgnore
import com.fasterxml.jackson.annotation.JsonManagedReference
import javax.persistence.*


/**
 *  @author Nidhal Dogga
 *  @created 1/30/2021 02:11
 *  SoftKall™ All rights reserved.
 */


data class Education(
    @field:JsonIgnore
    val id: Int,
    val degreeTitle: String,
    val instituteName: String,
    val instituteUrl: String,
    val beginYear: Int,
    val graduationYear: Int,
)
