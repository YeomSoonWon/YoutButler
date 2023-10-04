package com.ficrew.yourbutler.realestates.infrastructure.config;

import com.ficrew.yourbutler.realestates.application.SearchAllRealestatesProcessor;
import com.ficrew.yourbutler.realestates.application.SearchRealestateDetailsProcessor;
import com.ficrew.yourbutler.realestates.domain.repository.SearchRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RealestateConfig {

    @Bean
    public SearchRealestateDetailsProcessor searchRealestateDetailsProcessor(
        SearchRepository searchRepository
    ) {
        return new SearchRealestateDetailsProcessor(
            searchRepository
        );
    }

    @Bean
    public SearchAllRealestatesProcessor searchAllRealestatesProcessor() {
        return new SearchAllRealestatesProcessor();
    }

}
