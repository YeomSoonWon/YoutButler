package com.ficrew.yourbutler.realestates.application;

import com.ficrew.yourbutler.member.domain.repository.MemberRepository;
import com.ficrew.yourbutler.realestates.domain.BookmarkRepository;
import com.ficrew.yourbutler.realestates.domain.entity.Bookmark;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class CreateBookmarkProcessor {
    private final BookmarkRepository bookmarkRepository;
    private final MemberRepository memberRepository;

    public boolean execute(Long memberId, Long realestateId) {
        return bookmarkRepository.save(
            new Bookmark(
                memberRepository.findById(memberId),
                realestateId
            )
        );
    }
}
