package com.ndogga.personal.website.utils

import com.fasterxml.jackson.databind.DeserializationFeature
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext


/**
 * @author nidhaldogga
 * @created 31/01/2021 01:12
 * SoftKall™ All rights reserved.
 */


val jacksonMapper = jacksonObjectMapper()
    .registerModule(JavaTimeModule())
    .configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false)

inline fun <reified T : Any> Any.cast(): T {
    return jacksonMapper
        .convertValue(this, Map::class.java)
        .let { map -> jacksonMapper.convertValue(map, T::class.java) }
}

inline fun <reified T : Any> Collection<Any>.cast(): Collection<T> {
    return jacksonMapper
        .convertValue(this, Collection::class.java)
        .map { item -> jacksonMapper.convertValue(item, T::class.java) }
}


suspend fun <T> runIO(closure: suspend CoroutineScope.() -> T): T = withContext(Dispatchers.IO) {
    closure()
}
