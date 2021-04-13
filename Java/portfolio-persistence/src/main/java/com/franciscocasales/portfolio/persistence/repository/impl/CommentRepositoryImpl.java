package com.franciscocasales.portfolio.persistence.repository.impl;

import com.franciscocasales.portfolio.model.CommentDO;
import com.franciscocasales.portfolio.persistence.repository.CommentRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.stereotype.Repository;
import java.text.MessageFormat;

@Repository
public class CommentRepositoryImpl implements CommentRepository {

    private static final Logger logger = LoggerFactory.getLogger(CommentRepositoryImpl.class);

    @Autowired
    MongoOperations mongoOperations;

    @Override
    public void create(CommentDO comment) {
        comment = mongoOperations.save(comment);
        logger.info(MessageFormat.format("Se creo un nuevo comentario con el id {0}", comment.getId()));
    }

}
