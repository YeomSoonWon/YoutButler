package com.ficrew.yourbutler.realestates.infrastructure.persistence.es;

import com.ficrew.yourbutler.realestates.domain.entity.RealestateDocument;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

public interface ElasticsearchRealestateRepository extends ElasticsearchRepository<RealestateDocument, String> {
    RealestateDocument findByArticleNo(Long articleNo);
}
