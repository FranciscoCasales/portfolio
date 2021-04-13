package com.franciscocasales.portfolio.services;

import com.franciscocasales.portfolio.commons.to.InvitationRequestTO;
import java.util.Optional;

public interface InvitationRequestService {

    String create(String email);

    Optional<InvitationRequestTO> findById(String id);

    boolean accept(String id);

    boolean reject(String id);

    String createAndAccept(String email);
}
