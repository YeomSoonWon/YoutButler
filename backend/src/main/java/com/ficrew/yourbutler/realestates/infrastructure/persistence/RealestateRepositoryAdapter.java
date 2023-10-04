package com.ficrew.yourbutler.realestates.infrastructure.persistence;

import com.ficrew.yourbutler.realestates.domain.RealestateDocument;
import com.ficrew.yourbutler.realestates.domain.repository.SearchRepository;
import com.ficrew.yourbutler.realestates.infrastructure.persistence.es.ElasticsearchRealestateRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class RealestateRepositoryAdapter implements SearchRepository {

    private final ElasticsearchRealestateRepository elasticsearchRepository;

    @Override
    public RealestateDocument findByRealestateId(Long articleNo) {
        return elasticsearchRepository.findByArticleNo(articleNo);
    }
}
