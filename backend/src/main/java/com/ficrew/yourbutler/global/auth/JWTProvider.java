package com.ficrew.yourbutler.global.auth;

import org.springframework.security.authentication.AuthenticationManager;

public interface JWTProvider {
    Token generateTokens(String userId, String password);
    Token reissueAccessToken(String userId, String password);

    String getUserNameFromJwtToken(String jwt);

    boolean validateJwtToken(String jwt);
}
