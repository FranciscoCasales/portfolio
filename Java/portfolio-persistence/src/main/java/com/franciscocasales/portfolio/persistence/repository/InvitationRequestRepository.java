package com.franciscocasales.portfolio.persistence.repository;

import com.franciscocasales.portfolio.model.InvitationRequestDO;

import java.text.ParseException;
import java.util.Optional;

public interface InvitationRequestRepository {

    String create(String email);

    Optional<InvitationRequestDO> findById(String id);

    boolean updateAcceptationStatus(InvitationRequestDO invitationRequestDO, Boolean accepted);

    String createAndAccept(String email);

    boolean exist(String email);

}
