package com.ficrew.yourbutler.user.infrastructure.config;

import com.ficrew.yourbutler.global.auth.JWTProvider;
import com.ficrew.yourbutler.user.infrastructure.jwt.JwtMaker;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.authentication.AuthenticationManagerFactoryBean;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;

@Configuration
public class JwtConfig {
    @Bean
    public JwtMaker jwtMaker(
        AuthenticationManager authenticationManager
    ) {
        return new JwtMaker(
            authenticationManager
        );
    }

    @Bean
    public AuthenticationManagerFactoryBean authenticationManager() {
        return new AuthenticationManagerFactoryBean();
    }
}
