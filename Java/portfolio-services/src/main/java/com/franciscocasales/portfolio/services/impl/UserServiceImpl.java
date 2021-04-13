package com.franciscocasales.portfolio.services.impl;

import com.franciscocasales.portfolio.commons.to.AuthSuccessfulTO;
import com.franciscocasales.portfolio.commons.to.AuthTO;
import com.franciscocasales.portfolio.commons.utils.JWTUtils;
import com.franciscocasales.portfolio.services.UserService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class UserServiceImpl implements UserService {

    @Override
    public AuthSuccessfulTO auth(AuthTO auth) {
        List<String> rolesList = new ArrayList<String>();
        rolesList.add("admin");
        String token = JWTUtils.generateJWT("jcasales", rolesList);
        String refresh_token = JWTUtils.generateRefreshJWT(UUID.randomUUID().toString());
        return new AuthSuccessfulTO().builder()
                .token(token)
                .refreshToken(refresh_token);
    }

    @Override
    public String requestInvitationCode(String email) {
        return null;
    }

}
