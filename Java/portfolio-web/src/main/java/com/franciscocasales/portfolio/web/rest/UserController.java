package com.franciscocasales.portfolio.web.rest;

import com.franciscocasales.portfolio.commons.to.AuthSuccessfulTO;
import com.franciscocasales.portfolio.commons.to.AuthTO;
import com.franciscocasales.portfolio.commons.to.UserTO;
import com.franciscocasales.portfolio.services.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(allowedHeaders = "*", allowCredentials = "true", origins = "*")
@RestController
@RequestMapping("/users")
public class UserController {

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserService userService;

    @PostMapping(value = "/register", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> register(@RequestBody UserTO user) {
        try {
            return null;
        } catch (Exception e) {
            return null;
        }
    }

    @PostMapping(value = "/auth", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<AuthSuccessfulTO> auth(@RequestBody AuthTO auth) {
        try {
            AuthSuccessfulTO authSuccessfulTO = userService.auth(auth);
            return new ResponseEntity<>(authSuccessfulTO, HttpStatus.OK);
        } catch (Exception e) {
            return null;
        }
    }

}
