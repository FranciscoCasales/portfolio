package com.franciscocasales.portfolio.persistence.repository;

import com.franciscocasales.portfolio.model.EmailTemplateDO;

import java.util.Optional;

public interface EmailTemplateRepository {

    Optional<EmailTemplateDO> findByName(String name);

}
