package com.ndogga.personal.website.web.controller

import com.ndogga.personal.website.service.ContactService
import com.ndogga.personal.website.model.domain.ContactRequest
import org.springframework.web.bind.annotation.*
import javax.validation.Valid


/**
 *  @author Nidhal Dogga
 *  @created 1/29/2021 12:29
 *  SoftKall™ All rights reserved.
 */


@CrossOrigin
@RestController
@RequestMapping("/api/contact")
class ContactController(
    private val contactService: ContactService
) {

    @PostMapping
    suspend fun submitContactRequest(@Valid @RequestBody request: ContactRequest) {
        contactService.receiveContactRequest(request)
    }

}
