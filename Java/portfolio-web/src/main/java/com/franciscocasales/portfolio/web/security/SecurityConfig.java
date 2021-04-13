package com.franciscocasales.portfolio.web.security;

import com.franciscocasales.portfolio.commons.constants.ApplicationConstants;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@EnableWebSecurity
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable()
                .addFilterAfter(new JWTAuthorizationFilter(), UsernamePasswordAuthenticationFilter.class)
                .authorizeRequests()
                .antMatchers(HttpMethod.POST, ApplicationConstants.AUTH_PATH)
                .hasAuthority(ApplicationConstants.PUBLIC_ROLE)
                .antMatchers(ApplicationConstants.COMMENTS_PATH)
                .permitAll()
                .anyRequest().authenticated();
    }

//    @Override
//    public void configure(WebSecurity web) throws Exception {
//        web.ignoring()
//                .antMatchers(HttpMethod.POST, "/users/auth");
//    }
}
