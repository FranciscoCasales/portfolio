package com.franciscocasales.portfolio.services.impl;

import com.franciscocasales.portfolio.commons.to.CommentTO;
import com.franciscocasales.portfolio.model.CommentDO;
import com.franciscocasales.portfolio.persistence.repository.CommentRepository;
import com.franciscocasales.portfolio.services.CommentService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Type;

@Service
public class CommentServiceImpl implements CommentService {

    @Autowired
    ModelMapper modelMapper;

    @Autowired
    CommentRepository commentRepository;

    @Override
    public void create(CommentTO comment) {
        Type commentDOType = new TypeToken<CommentDO>() {}.getType();
        CommentDO commentDO = modelMapper.map(comment, commentDOType);
        commentRepository.create(commentDO);
    }

}
