package com.ficrew.yourbutler.realestates.infrastructure.persistence;

import com.ficrew.yourbutler.realestates.domain.entity.RealestateDocument;
import com.ficrew.yourbutler.realestates.domain.repository.SearchRepository;
import com.ficrew.yourbutler.realestates.infrastructure.persistence.es.ElasticsearchRealestateRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class EsRealestateRepositoryAdapter implements SearchRepository {

    private final ElasticsearchRealestateRepository elasticsearchRepository;

    @Override
    public RealestateDocument findByRealestateId(Long articleNo) {
        return elasticsearchRepository.findByArticleNo(articleNo);
    }


}
