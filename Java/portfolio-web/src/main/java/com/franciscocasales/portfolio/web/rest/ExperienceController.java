package com.franciscocasales.portfolio.web.rest;

import com.franciscocasales.portfolio.commons.constants.ApplicationConstants;
import com.franciscocasales.portfolio.commons.to.ExperienceTO;
import com.franciscocasales.portfolio.services.ExperienceService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.MessageFormat;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(allowedHeaders = "*", allowCredentials = "true", origins = "*")
@RestController
@RequestMapping("/experiences")
public class ExperienceController {

    private static final Logger logger = LoggerFactory.getLogger(ExperienceController.class);

    @Autowired
    ExperienceService experienceService;

    @PostMapping(value = "/experience", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> create(@RequestBody ExperienceTO experience) {
        try {
            String id = experienceService.create(experience);
            logger.info(MessageFormat.format(ApplicationConstants.CREATE_SUCCESSFUL_MESSAGE, id));
            return new ResponseEntity<>(id, HttpStatus.OK);
        } catch (Exception e) {
            logger.error(e.getLocalizedMessage());
            return new ResponseEntity<>(e.getLocalizedMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/experience", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<ExperienceTO>> findAll(
            @RequestParam(value = "language", required = false, defaultValue = "1") Short language) {
        try {
            List<ExperienceTO> experienceList = experienceService.findAll(language);
            return new ResponseEntity<>(experienceList, HttpStatus.OK);
        } catch (Exception e) {
            logger.error(e.getLocalizedMessage());
            return new ResponseEntity<>(new ArrayList<ExperienceTO>(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
