package com.ficrew.yourbutler.realestates.domain.repository;

import com.ficrew.yourbutler.realestates.domain.RealestateDocument;

public interface SearchRepository {

    RealestateDocument findByRealestateId(Long realestateId);

//    boolean existsByRealestateId(Long realestateId);
}
