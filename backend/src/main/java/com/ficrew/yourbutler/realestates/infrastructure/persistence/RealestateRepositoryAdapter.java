package com.ficrew.yourbutler.realestates.infrastructure.persistence;

import com.ficrew.yourbutler.realestates.domain.repository.BookmarkRepository;
import com.ficrew.yourbutler.realestates.domain.entity.Bookmark;
import com.ficrew.yourbutler.realestates.infrastructure.persistence.jpa.JpaBookmarkRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class RealestateRepositoryAdapter implements BookmarkRepository {
    private final JpaBookmarkRepository jpaBookmarkRepository;

    @Override
    public boolean existsByRealestateId(Long realestateId) {
        return jpaBookmarkRepository.existsByRealestateId(realestateId);
    }

    @Override
    public boolean deleteByRealestateId(Long realestateId) {
        return false;
    }

    @Override
    public boolean save(Bookmark bookmark) {
        return false;
    }
}
