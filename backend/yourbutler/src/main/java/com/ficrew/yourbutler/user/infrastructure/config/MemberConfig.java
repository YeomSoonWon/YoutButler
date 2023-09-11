package com.ficrew.yourbutler.user.infrastructure.config;

import com.ficrew.yourbutler.user.application.CreateMemberProcessor;
import com.ficrew.yourbutler.user.domain.repository.MemberRepository;
import com.ficrew.yourbutler.user.infrastructure.encryption.UserSecurityPasswordEncoder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class MemberConfig {

    @Bean
    public CreateMemberProcessor createMemberProcessor(
        MemberRepository memberRepository
    ) {
        return new CreateMemberProcessor(
                memberRepository,
            new UserSecurityPasswordEncoder(userEncodingAlgorithm())
        );
    }

    @Bean
    public PasswordEncoder userEncodingAlgorithm() {
        return new BCryptPasswordEncoder();
    }

}
