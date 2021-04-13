package com.franciscocasales.portfolio.persistence.repository.impl;

import com.franciscocasales.portfolio.model.EmailTemplateDO;
import com.franciscocasales.portfolio.persistence.repository.EmailTemplateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class EmailTemplateRepositoryImpl implements EmailTemplateRepository {

    @Autowired
    MongoOperations mongoOperations;

    @Override
    public Optional<EmailTemplateDO> findByName(String name) {
        Query query = new Query(Criteria.where("name").is(name));
        EmailTemplateDO emailTemplateDO = mongoOperations.findOne(query, EmailTemplateDO.class);
        return Optional.ofNullable(emailTemplateDO);
    }

}
