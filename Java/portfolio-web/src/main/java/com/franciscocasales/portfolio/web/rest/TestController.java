package com.franciscocasales.portfolio.web.rest;

import com.franciscocasales.portfolio.services.EmailService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(allowedHeaders = "*", allowCredentials = "true", origins = "*")
@RestController
@RequestMapping("/test")
public class TestController {

    private static final Logger logger = LoggerFactory.getLogger(TestController.class);

    @Autowired
    EmailService emailService;

    @GetMapping(value = "/send")
    public void sendEmail() {
        try {
            emailService.send("jose.casales@outlook.com", "TEST", null);
        } catch (Exception e) {
            logger.error(e.getLocalizedMessage());
        }
    }

}
