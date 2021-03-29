package com.ndogga.personal.website.model.entity

import com.fasterxml.jackson.annotation.JsonIgnore
import javax.persistence.*


/**
 * @author nidhaldogga
 * @created 29/03/2021 10:53
 * SoftKall™ All rights reserved.
 */


@Entity(name = "user_description")
data class UserDescriptionEntity(
    @Id
    @GeneratedValue
    val id: Int? = null,
    @Column(name = "about_markdown")
    val aboutMarkdown: String,
    @ManyToOne
    @get:JsonIgnore
    val user: UserEntity
) {

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as UserDescriptionEntity

        if (id != other.id) return false
        if (aboutMarkdown != other.aboutMarkdown) return false

        return true
    }

    override fun hashCode(): Int {
        var result = id ?: 0
        result = 31 * result + aboutMarkdown.hashCode()
        return result
    }
}
