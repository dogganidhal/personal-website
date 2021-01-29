package com.ndogga.personal.website.web.controller

import com.ndogga.personal.website.service.ContactService
import com.ndogga.personal.website.web.dto.ContactRequest
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import javax.validation.Valid


/**
 *  @author Nidhal Dogga
 *  @created 1/29/2021 12:29
 *  SoftKall™ All rights reserved.
 */


@RestController
@RequestMapping("/api")
class ContactController(
    private val contactService: ContactService
) {

    @PostMapping("/contact")
    suspend fun submitContactRequest(@Valid @RequestBody request: ContactRequest) {
        contactService.receiveContactRequest(request)
    }

}
