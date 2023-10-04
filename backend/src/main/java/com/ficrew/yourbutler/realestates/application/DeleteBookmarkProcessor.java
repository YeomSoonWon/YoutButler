package com.ficrew.yourbutler.realestates.application;

import com.ficrew.yourbutler.realestates.domain.repository.BookmarkRepository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class DeleteBookmarkProcessor {

    private final BookmarkRepository bookmarkRepository;
    public boolean execute(Long memberId, Long realestateId) {
        return bookmarkRepository.deleteByRealestateIdAndMemberId(realestateId, memberId);
    }
}
