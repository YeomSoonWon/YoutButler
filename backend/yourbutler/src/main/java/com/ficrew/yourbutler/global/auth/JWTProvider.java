package com.ficrew.yourbutler.global.auth;

import org.springframework.security.authentication.AuthenticationManager;

public interface JWTProvider {
    Token generateTokens(AuthenticationManager authenticationManager, String userId, String password);
    Token reissueAccessToken(AuthenticationManager authenticationManager, String userId, String password);

    String getUserNameFromJwtToken(String jwt);

    boolean validateJwtToken(String jwt);
}
