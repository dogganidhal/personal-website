package com.ndogga.personal.website.model.entity

import com.fasterxml.jackson.annotation.JsonBackReference
import org.hibernate.annotations.Fetch
import org.hibernate.annotations.FetchMode
import org.hibernate.annotations.LazyCollection
import org.hibernate.annotations.LazyCollectionOption
import javax.persistence.*


/**
 *  @author Nidhal Dogga
 *  @created 1/30/2021 02:35
 *  SoftKall™ All rights reserved.
 */


@Entity(name = "user")
data class UserEntity(
    @Id
    @GeneratedValue
    val id: Int? = null,
    @Column(name = "first_name")
    val firstName: String,
    @Column(name = "last_name")
    val lastName: String,
    @Column
    val age: Int,
    @Column
    val position: String,
    @Column(name = "picture_url")
    val pictureUrl: String,
    @OneToOne(mappedBy = "user")
    val description: UserDescriptionEntity
)
