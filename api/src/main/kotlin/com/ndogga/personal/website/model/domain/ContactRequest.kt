package com.ndogga.personal.website.model.domain

import javax.validation.constraints.Email
import javax.validation.constraints.NotBlank


/**
 *  @author Nidhal Dogga
 *  @created 1/29/2021 12:29
 *  SoftKall™ All rights reserved.
 */


data class ContactRequest(
    @field:NotBlank
    val name: String,
    @field:Email
    @field:NotBlank
    val email: String,
    @field:NotBlank
    val message: String
)
