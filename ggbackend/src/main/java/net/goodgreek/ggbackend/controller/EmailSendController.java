package net.goodgreek.ggbackend.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import net.goodgreek.ggbackend.model.Email;
import net.goodgreek.ggbackend.service.EmailService;

@RestController
public class EmailSendController {
    public EmailSendController(EmailService emailService) {
        this.emailService = emailService;
    }

    private final EmailService emailService;

    @PostMapping("/sendMail")
    public String sendMail(@RequestBody Email email) {
        return emailService.sendEmail(email);
    }
    
}
