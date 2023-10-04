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
    public Bookmark save(Bookmark bookmark) {
        return jpaBookmarkRepository.save(bookmark);
    }

    @Override
    public boolean deleteByRealestateIdAndMemberId(Long realestateId, Long memberId) {
        return jpaBookmarkRepository.deleteByRealestateIdAndMemberId(realestateId, memberId) != 1L;
    }
}
