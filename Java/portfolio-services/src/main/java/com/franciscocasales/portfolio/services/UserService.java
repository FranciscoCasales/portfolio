package com.franciscocasales.portfolio.services;

import com.franciscocasales.portfolio.commons.to.AuthSuccessfulTO;
import com.franciscocasales.portfolio.commons.to.AuthTO;

public interface UserService {

    AuthSuccessfulTO auth(AuthTO auth);

    String requestInvitationCode(String email);

}
