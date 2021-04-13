package com.franciscocasales.portfolio.commons.constants;

import java.util.Collections;
import java.util.List;

public class ApplicationConstants {

    public static final String JWT_SECRET_ENV = "pJwtSecret";
    public static final String JWT_ID = "portfolioJWT";
    public static final String CLAIM_ID = "authorities";
    public static final String AUTHORIZATION_HEADER = "Authorization";
    public static final String PREFIX = "Bearer ";
    public static final String EMPTY_STRING = "";
    public static final String PUBLIC_ROLE = "public";
    public static final List<String> EXCLUDED_URIS = Collections.singletonList(
            "/users/auth"
    );
    public static final String OWNER_MAIL = "frabet01@gmail.com";//"jose.casales@outlook.com";
    public static final Integer ZERO = 0;

    public static final String ISO_TIMEZONE = "UTC";
    public static final String PATTERN_DDMMYYYY_TIME = "ddMMyyyy HH:mm:ss";

    // Users flow
    public static final String AUTH_PATH = "/users/auth/**";

    // Comments flow
    public static final String COMMENTS_PATH = "/comments/**";

    // Constants of Experience flow
    public static final String CREATE_SUCCESSFUL_MESSAGE = "Experience created successfully with id {0}";

}
