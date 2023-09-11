package com.ficrew.yourbutler.user.infrastructure.config;

import com.ficrew.yourbutler.user.domain.repository.MemberRepository;
import com.ficrew.yourbutler.user.infrastructure.persistence.MemberRepositoryAdapter;
import com.ficrew.yourbutler.user.infrastructure.persistence.jpa.JpaMemberRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MemberRepositoryConfig {

    @Bean
    public MemberRepository memberRepository(JpaMemberRepository jpaMemberRepository) {
        return new MemberRepositoryAdapter(jpaMemberRepository);
    }
}
