package com.franciscocasales.portfolio.services.impl;

import com.franciscocasales.portfolio.commons.constants.ApplicationConstants;
import com.franciscocasales.portfolio.commons.constants.LogMessages;
import com.franciscocasales.portfolio.commons.constants.MailTemplates;
import com.franciscocasales.portfolio.commons.to.InvitationRequestTO;
import com.franciscocasales.portfolio.model.InvitationRequestDO;
import com.franciscocasales.portfolio.persistence.repository.InvitationRequestRepository;
import com.franciscocasales.portfolio.services.EmailService;
import com.franciscocasales.portfolio.services.InvitationRequestService;
import com.google.common.collect.ImmutableMap;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import java.lang.reflect.Type;
import java.text.MessageFormat;
import java.util.Map;
import java.util.Optional;

@Service
public class InvitationRequestServiceImpl implements InvitationRequestService {

    private static final Logger logger = LoggerFactory.getLogger(InvitationRequestServiceImpl.class);

    @Autowired
    ModelMapper modelMapper;

    @Autowired
    InvitationRequestRepository invitationRequestRepository;

    @Autowired
    EmailService emailService;

    @Override
    public String create(String email) {
        try {
            if (!invitationRequestRepository.exist(email)) {
                String id = invitationRequestRepository.create(email);
                Map<String, String> mailParams = ImmutableMap.<String, String>builder()
                        .put("email", email)
                        .put("objectId", id)
                        .build();
                emailService.send(ApplicationConstants.OWNER_MAIL, MailTemplates.INVITATION_REQUEST, mailParams);
                return id;
            }
            String message = MessageFormat.format(LogMessages.EXISTENT_REQUEST_INVITATION, email);
            logger.info(message);
            return message;
        } catch (MessagingException e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public Optional<InvitationRequestTO> findById(String id) {
        Optional<InvitationRequestDO> invitationRequestDO = invitationRequestRepository.findById(id);
        Type invitationRequestTOType = new TypeToken<Optional<InvitationRequestTO>>() {}.getType();
        return modelMapper.map(invitationRequestDO, invitationRequestTOType);
    }

    @Override
    public boolean accept(String id) {
        return updateAcceptationStatus(id, Boolean.TRUE);
    }

    @Override
    public boolean reject(String id) {
        return updateAcceptationStatus(id, Boolean.FALSE);
    }

    private boolean updateAcceptationStatus(String id, boolean accept) {
        Optional<InvitationRequestDO> invitationRequestOpt = invitationRequestRepository.findById(id);
        return invitationRequestOpt.map(invitationRequestDO ->
                invitationRequestRepository.updateAcceptationStatus(invitationRequestDO, accept))
                .orElse(Boolean.FALSE);
    }

    @Override
    public String createAndAccept(String email) {
        return invitationRequestRepository.createAndAccept(email);
    }

}
