package com.ficrew.yourbutler.user.infrastructure.config;

import com.ficrew.yourbutler.user.application.CreateUserProcessor;
import com.ficrew.yourbutler.user.domain.repository.UserRepository;
import com.ficrew.yourbutler.user.infrastructure.encryption.UserSecurityPasswordEncoder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class UserConfig {

    @Bean
    public CreateUserProcessor createUserProcessor(
        UserRepository userRepository
    ) {
        return new CreateUserProcessor(
            userRepository,
            new UserSecurityPasswordEncoder(userEncodingAlgorithm())
        );
    }

    @Bean
    public PasswordEncoder userEncodingAlgorithm() {
        return new BCryptPasswordEncoder();
    }

}
