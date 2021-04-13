package com.franciscocasales.portfolio.commons.to;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AuthSuccessfulTO {

    String token;
    String refresh_token;

    public AuthSuccessfulTO builder() {
        return this;
    }

    public AuthSuccessfulTO token(String token) {
        this.token = token;
        return this;
    }

    public AuthSuccessfulTO refreshToken(String refresh_token) {
        this.refresh_token = refresh_token;
        return this;
    }

}
