package com.ficrew.yourbutler.realestates.application.facade;

import com.ficrew.yourbutler.realestates.application.CheckBookmarkStatusProcessor;
import com.ficrew.yourbutler.realestates.application.CreateBookmarkProcessor;
import com.ficrew.yourbutler.realestates.application.DeleteBookmarkProcessor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RealestateFacade {

    private final CheckBookmarkStatusProcessor checkBookmarkStatusProcessor;
    private final CreateBookmarkProcessor createBookmarkProcessor;
    private final DeleteBookmarkProcessor deleteBookmarkProcessor;

    public boolean isBookmarked(Long realestateId) {
        return checkBookmarkStatusProcessor.execute(realestateId);
    }

    public boolean createBookmark(Long memberId, Long realestateId) {
        return createBookmarkProcessor.execute(memberId, realestateId);
    }

    public boolean deleteBookmark(Long realestateId, Long id) {
        return deleteBookmarkProcessor.execute(realestateId);
    }
}
