package com.franciscocasales.portfolio.persistence.repository.impl;

import com.franciscocasales.portfolio.commons.constants.ApplicationConstants;
import com.franciscocasales.portfolio.commons.constants.MailTemplates;
import com.franciscocasales.portfolio.commons.utils.DateUtils;
import com.franciscocasales.portfolio.model.InvitationRequestDO;
import com.franciscocasales.portfolio.persistence.repository.InvitationRequestRepository;
import com.google.common.collect.ImmutableMap;
import org.bson.types.ObjectId;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;
import java.util.Map;
import java.util.Optional;


@Repository
public class InvitationRequestRepositoryImpl implements InvitationRequestRepository {

    private static final Logger logger = LoggerFactory.getLogger(InvitationRequestRepositoryImpl.class);

    @Autowired
    MongoOperations mongoOperations;

    @Override
    public String create(String email) {
        InvitationRequestDO invitationRequestDO = createDO(email);
        return invitationRequestDO.getId().toString();
    }

    @Override
    public Optional<InvitationRequestDO> findById(String id) {
        Query query = new Query(Criteria.where("id").is(new ObjectId(id)));
        return Optional.ofNullable(mongoOperations.findOne(query, InvitationRequestDO.class));
    }

    private Optional<InvitationRequestDO> findByEmail(String email) {
        Query query = new Query(Criteria.where("email").is(email));
        return Optional.ofNullable(mongoOperations.findOne(query, InvitationRequestDO.class));
    }

    @Override
    public boolean updateAcceptationStatus(InvitationRequestDO invitationRequestDO, Boolean accept) {
        invitationRequestDO.setAccepted(accept);
        invitationRequestDO.setUpdateDate(DateUtils.getCurrentIsoDate());
        mongoOperations.save(invitationRequestDO);
        return Boolean.TRUE;
    }

    @Override
    public String createAndAccept(String email) {
        InvitationRequestDO invitationRequestDO = createDO(email);
        updateAcceptationStatus(invitationRequestDO, Boolean.TRUE);
        return invitationRequestDO.getId().toString();
    }

    private InvitationRequestDO createDO(String email) {
        InvitationRequestDO invitationRequestDO = InvitationRequestDO.builder()
                .email(email)
                .entryDate(DateUtils.getCurrentIsoDate())
                .build();
        return mongoOperations.save(invitationRequestDO);
    }

    public boolean exist(String email) {
        Optional<InvitationRequestDO> invitationRequestExist = findByEmail(email);
        return invitationRequestExist.isPresent();
    }

}
