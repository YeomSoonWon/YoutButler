package com.ficrew.yourbutler.user.infrastructure.config;

import com.ficrew.yourbutler.global.auth.JWTProvider;
import com.ficrew.yourbutler.user.infrastructure.jwt.JwtMaker;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;

@Configuration
public class JwtConfig {
    @Bean
    public JWTProvider jwtMaker() {
        return new JwtMaker();
    }
}
