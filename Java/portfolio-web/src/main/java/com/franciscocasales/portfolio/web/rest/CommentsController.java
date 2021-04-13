package com.franciscocasales.portfolio.web.rest;

import com.franciscocasales.portfolio.commons.to.CommentTO;
import com.franciscocasales.portfolio.services.CommentService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(allowedHeaders = "*", allowCredentials = "true", origins = "*")
@RestController
@RequestMapping("/comments")
public class CommentsController {

    private static final Logger logger = LoggerFactory.getLogger(CommentsController.class);

    @Autowired
    CommentService commentService;

    @PostMapping(value = "/comment", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> create(@RequestBody CommentTO comment) {
        try {
            commentService.create(comment);
            logger.info("Se creo exitosamente el comentario");
            return new ResponseEntity<>("Se creo exitosamente el comentario", HttpStatus.OK);
        } catch (Exception err) {
            logger.error(err.getLocalizedMessage());
            return new ResponseEntity<>(err.getLocalizedMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
