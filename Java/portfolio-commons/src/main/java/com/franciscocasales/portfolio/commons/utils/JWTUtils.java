package com.franciscocasales.portfolio.commons.utils;

import com.franciscocasales.portfolio.commons.constants.ApplicationConstants;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.env.Environment;
import java.util.List;

public class JWTUtils {

    private static final Environment environment = SpringContext.getBean(Environment.class);

    private static final Logger logger = LoggerFactory.getLogger(JWTUtils.class);

    public static String generateJWT(String username, List<String> roleKeyList) {
        try {
            String jwtSecret = environment.getProperty(ApplicationConstants.JWT_SECRET_ENV);
            assert jwtSecret != null;
            String token = Jwts
                    .builder()
                    .setId(ApplicationConstants.JWT_ID)
                    .setSubject(username)
                    .claim(ApplicationConstants.CLAIM_ID, roleKeyList)
                    .setIssuedAt(DateUtils.getCurrentIsoDate())
                    .setExpiration(DateUtils.getJWTExpirationDate(60L))
                    .signWith(SignatureAlgorithm.HS256, jwtSecret.getBytes())
                    .compact();
            return ApplicationConstants.PREFIX + token;
        } catch (Exception e) {
            logger.error(e.getLocalizedMessage());
            return null;
        }
    }

    public static String generateRefreshJWT(String userId) {
        try {
            String jwtSecret = environment.getProperty(ApplicationConstants.JWT_SECRET_ENV);
            assert jwtSecret != null;
            return Jwts
                    .builder()
                    .setId(ApplicationConstants.JWT_ID)
                    .setSubject(userId)
                    .setIssuedAt(DateUtils.getCurrentIsoDate())
                    .setExpiration(DateUtils.getJWTExpirationDate(60L * 48L))
                    .signWith(SignatureAlgorithm.HS256, jwtSecret.getBytes())
                    .compact();
        } catch (Exception e) {
            logger.error(e.getLocalizedMessage());
            return null;
        }
    }

}
