package com.franciscocasales.portfolio.web.security;

import com.franciscocasales.portfolio.commons.constants.ApplicationConstants;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.lang.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class JWTAuthorizationFilter extends OncePerRequestFilter {

    @Autowired
    Environment environment;

    @Override
    protected void doFilterInternal(@NonNull HttpServletRequest request, @NonNull HttpServletResponse response,
                                    @NonNull FilterChain filterChain) throws IOException {
        try {
            if (isExcludedURI(request)) {
                UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(ApplicationConstants.PUBLIC_ROLE,
                        null, Collections.singletonList(new SimpleGrantedAuthority(ApplicationConstants.PUBLIC_ROLE)));
                SecurityContextHolder.getContext().setAuthentication(auth);
            } else if (tokenIsPresent(request)) {
                Claims claims = validateToken(request);
                if (claims != null && claims.get(ApplicationConstants.CLAIM_ID) != null) {
                    authenticate(claims);
                } else {
                    SecurityContextHolder.clearContext();
                }
            } else {
                SecurityContextHolder.clearContext();
            }
            filterChain.doFilter(request, response);
        } catch (ServletException | IOException e) {
            response.setStatus(HttpServletResponse.SC_FORBIDDEN);
            response.sendError(HttpServletResponse.SC_FORBIDDEN, e.getLocalizedMessage());
        }
    }

    private boolean isExcludedURI(HttpServletRequest request) {
        return ApplicationConstants.EXCLUDED_URIS.contains(request.getRequestURI());
    }

    private boolean tokenIsPresent(HttpServletRequest request) {
        String authenticationHeader = request.getHeader(ApplicationConstants.AUTHORIZATION_HEADER);
        return !(authenticationHeader == null || !authenticationHeader.startsWith(ApplicationConstants.PREFIX));
    }

    private Claims validateToken(HttpServletRequest request) {
        try {
            String jwtSecret = environment.getProperty(ApplicationConstants.JWT_SECRET_ENV);
            assert jwtSecret != null;
            String token = request.getHeader(ApplicationConstants.AUTHORIZATION_HEADER)
                    .replace(ApplicationConstants.PREFIX, ApplicationConstants.EMPTY_STRING);
            Jws<Claims> tokenInfo = Jwts.parser()
                    .setSigningKey(jwtSecret.getBytes())
                    .parseClaimsJws(token);
            logger.info(tokenInfo.getBody());
            return tokenInfo.getBody();
        } catch (Exception e) {
            logger.error(e.getLocalizedMessage());
            return null;
        }
    }

    private void authenticate(Claims claims) {
        @SuppressWarnings("unchecked")
        List<String> roles = (List<String>) claims.get(ApplicationConstants.CLAIM_ID);
        UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(claims.getSubject(),null,
                roles.stream().map(SimpleGrantedAuthority::new).collect(Collectors.toList()));
        SecurityContextHolder.getContext().setAuthentication(auth);
    }

}
