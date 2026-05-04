package com.ndogga.personal.website.model.domain

import com.fasterxml.jackson.annotation.JsonBackReference
import com.fasterxml.jackson.annotation.JsonManagedReference
import javax.persistence.*


/**
 *  @author Nidhal Dogga
 *  @created 1/30/2021 02:35
 *  SoftKall™ All rights reserved.
 */


data class User(
    val id: Int,
    val fullName: String,
    val position: String
)
