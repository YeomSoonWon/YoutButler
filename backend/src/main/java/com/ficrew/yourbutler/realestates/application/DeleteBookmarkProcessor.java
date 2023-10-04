package com.ficrew.yourbutler.realestates.application;

import com.ficrew.yourbutler.member.domain.repository.MemberRepository;
import com.ficrew.yourbutler.realestates.domain.BookmarkRepository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class DeleteBookmarkProcessor {

    private final BookmarkRepository bookmarkRepository;
    private final MemberRepository memberRepository;
    public boolean execute(Long realestateId) {
        return bookmarkRepository.deleteByRealestateId(realestateId);
    }
}
