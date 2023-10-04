package com.ficrew.yourbutler.realestates.domain.repository;

import com.ficrew.yourbutler.realestates.domain.entity.Bookmark;

public interface BookmarkRepository {

    boolean existsByRealestateId(Long realestateId);

    boolean deleteByRealestateId(Long realestateId);

    boolean save(Bookmark bookmark);
}
