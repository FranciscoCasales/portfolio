package com.franciscocasales.portfolio.persistence.repository.impl;

import com.franciscocasales.portfolio.model.ExperienceDO;
import com.franciscocasales.portfolio.persistence.repository.ExperienceRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import java.text.MessageFormat;
import java.util.List;

@Repository
public class ExperienceRepositoryImpl implements ExperienceRepository {

    private static final Logger logger = LoggerFactory.getLogger(ExperienceRepositoryImpl.class);

    @Autowired
    MongoOperations mongoOperations;

    @Override
    public String create(ExperienceDO experience) {
        experience = mongoOperations.save(experience);
        logger.info(MessageFormat.format("Se creo un nuevo registro de experiencia con el id {0}", experience.getId()));
        return experience.getId().toString();
    }

    @Override
    public List<ExperienceDO> findAll(Short language) {
        Query query = new Query(Criteria.where("language").is(language));
        return mongoOperations.find(query, ExperienceDO.class);
    }
}
