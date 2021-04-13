package com.franciscocasales.portfolio.web.rest;

import com.franciscocasales.portfolio.services.InvitationRequestService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(allowedHeaders = "*", allowCredentials = "true", origins = "*")
@RestController
@RequestMapping("/invitations")
public class InvitationRequestController {

    private static final Logger logger = LoggerFactory.getLogger(InvitationRequestController.class);

    @Autowired
    InvitationRequestService invitationRequestService;

    @GetMapping(value = "/request", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> requestInvitationCode(@RequestParam("email") String email) {
        try {
            String id = invitationRequestService.create(email);
            if (id != null) {
                return new ResponseEntity<>(id, HttpStatus.OK);
            }
            return null;
        } catch (Exception e) {
            return null;
        }
    }

    @GetMapping(value = "/authorize", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Boolean> authorizeInvitation(@RequestParam("requestId") String requestId) {
        try {
            boolean isAccepted = invitationRequestService.accept(requestId);
            return new ResponseEntity<>(isAccepted, HttpStatus.OK);
        } catch (Exception e) {
            logger.error(e.getLocalizedMessage());
            return new ResponseEntity<>(Boolean.FALSE, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
