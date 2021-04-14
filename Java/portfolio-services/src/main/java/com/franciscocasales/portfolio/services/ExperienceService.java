package com.franciscocasales.portfolio.services;

import com.franciscocasales.portfolio.commons.to.ExperienceTO;

import java.util.List;

public interface ExperienceService {

    String create(ExperienceTO experience);

    List<ExperienceTO> findAll(Short language);

}
