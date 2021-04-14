package com.franciscocasales.portfolio.persistence.repository;

import com.franciscocasales.portfolio.model.ExperienceDO;

import java.util.List;

public interface ExperienceRepository {

    String create(ExperienceDO experience);

    List<ExperienceDO> findAll(Short language);

}
