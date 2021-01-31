package com.ndogga.personal.website.service

import com.ndogga.personal.website.model.domain.ContactRequest


/**
 *  @author Nidhal Dogga
 *  @created 1/29/2021 12:30
 *  SoftKall™ All rights reserved.
 */


interface ContactService {
    suspend fun receiveContactRequest(request: ContactRequest)
}
