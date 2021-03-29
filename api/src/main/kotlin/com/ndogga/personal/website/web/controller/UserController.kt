package com.ndogga.personal.website.web.controller

import com.ndogga.personal.website.model.domain.User
import com.ndogga.personal.website.model.domain.UserDescription
import com.ndogga.personal.website.service.UserService
import org.springframework.web.bind.annotation.*
import java.util.*


/**
 * @author nidhaldogga
 * @created 29/03/2021 11:07
 * SoftKall™ All rights reserved.
 */


@CrossOrigin
@RestController
@RequestMapping("/api/user")
class UserController(private val userService: UserService) {

    @GetMapping
    suspend fun getUser(@RequestParam("api-key") apiKey: UUID): User? = userService
        .getUser(apiKey)

}
