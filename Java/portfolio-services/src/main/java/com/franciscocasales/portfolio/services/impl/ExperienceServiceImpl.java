package com.franciscocasales.portfolio.services.impl;

import com.franciscocasales.portfolio.commons.to.ExperienceTO;
import com.franciscocasales.portfolio.model.ExperienceDO;
import com.franciscocasales.portfolio.persistence.repository.ExperienceRepository;
import com.franciscocasales.portfolio.services.ExperienceService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Type;
import java.util.List;

@Service
public class ExperienceServiceImpl implements ExperienceService {

    @Autowired
    ModelMapper modelMapper;

    @Autowired
    ExperienceRepository experienceRepository;

    @Override
    public String create(ExperienceTO experience) {
        Type experienceDOType = new TypeToken<ExperienceDO>() {}.getType();
        ExperienceDO experienceDO = modelMapper.map(experience, experienceDOType);
        return experienceRepository.create(experienceDO);
    }

    @Override
    public List<ExperienceTO> findAll(Short language) {
        Type experienceTOListType = new TypeToken<List<ExperienceTO>>() {}.getType();
        return modelMapper.map(experienceRepository.findAll(language), experienceTOListType);
    }

}
