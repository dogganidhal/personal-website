package com.ndogga.personal.website.service.impl

import com.github.mustachejava.DefaultMustacheFactory
import com.github.mustachejava.MustacheFactory
import com.ndogga.personal.website.configuration.WebConfigurationProperties
import com.ndogga.personal.website.service.ContactService
import com.ndogga.personal.website.model.dto.ContactRequest
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import org.slf4j.LoggerFactory
import org.springframework.mail.MailException
import org.springframework.mail.javamail.JavaMailSender
import org.springframework.mail.javamail.MimeMessageHelper
import org.springframework.mail.javamail.MimeMessagePreparator
import org.springframework.stereotype.Service
import java.io.StringWriter


@Service
class EmailContactService(
    private val mailSender: JavaMailSender,
    private val configuration: WebConfigurationProperties
) : ContactService {

    companion object {
        @JvmStatic
        @Suppress("JAVA_CLASS_ON_COMPANION")
        private val logger = LoggerFactory.getLogger(javaClass.enclosingClass)
    }

    private val mustacheFactory: MustacheFactory = DefaultMustacheFactory()

    @Suppress("BlockingMethodInNonBlockingContext")
    override suspend fun receiveContactRequest(request: ContactRequest) = withContext(Dispatchers.IO) {
        val html = with(StringWriter()) {
            mustacheFactory
                .compile("templates/contact.html")
                .execute(this, request).flush()
            toString()
        }
        val messageCreator = MimeMessagePreparator { mimeMessage ->
            with(MimeMessageHelper(mimeMessage, "UTF-8")) {
                setFrom(request.email)
                setTo(configuration.mail.recipient)
                setSubject("${request.name} wants to get in touch")
                setText(html, true)
            }
        }
        try {
            mailSender.send(messageCreator)
        } catch (throwable: MailException) {
            logger.error(throwable.message, throwable)
        }
    }

}
