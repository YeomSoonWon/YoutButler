package com.ficrew.yourbutler.realestates.infrastructure.config;

import com.ficrew.yourbutler.realestates.domain.repository.SearchRepository;
import com.ficrew.yourbutler.realestates.infrastructure.persistence.RealestateRepositoryAdapter;
import com.ficrew.yourbutler.realestates.infrastructure.persistence.es.ElasticsearchRealestateRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RealestateEsRepositoryConfig {

    @Bean
    public SearchRepository searchRepository(ElasticsearchRealestateRepository elasticsearchRealestateRepository) {
        return new RealestateRepositoryAdapter(elasticsearchRealestateRepository);
    }

}
