package com.ficrew.yourbutler.user.infrastructure.config;

import com.ficrew.yourbutler.user.domain.repository.UserRepository;
import com.ficrew.yourbutler.user.infrastructure.persistence.UserRepositoryAdapter;
import com.ficrew.yourbutler.user.infrastructure.persistence.jpa.JpaUserRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class UserRepositoryConfig {

    @Bean
    public UserRepository userRepository(JpaUserRepository jpaUserRepository) {
        return new UserRepositoryAdapter(jpaUserRepository);
    }
}
