package com.ficrew.yourbutler.realestates.infrastructure.persistence.elasticsearch;

import com.ficrew.yourbutler.realestates.domain.RealestateDocument;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

public interface RealestateRepository extends ElasticsearchRepository<RealestateDocument, String> {

}
