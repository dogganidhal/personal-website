package com.ndogga.personal.website.model.domain

import com.fasterxml.jackson.annotation.JsonBackReference
import com.fasterxml.jackson.annotation.JsonIgnore
import com.fasterxml.jackson.annotation.JsonManagedReference
import javax.persistence.*


/**
 *  @author Nidhal Dogga
 *  @created 1/30/2021 02:18
 *  SoftKall™ All rights reserved.
 */


data class SkillSet(
    @field:JsonIgnore
    val id: Int,
    val title: String,
    val skills: Collection<String>,
    val iconUrl: String
)
