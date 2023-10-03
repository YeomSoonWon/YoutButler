package com.ficrew.yourbutler.realestates.application.facade;

import com.ficrew.yourbutler.realestates.application.SearchAllRealestatesProcessor;
import com.ficrew.yourbutler.realestates.application.SearchRealestateDetailsProcessor;
import com.ficrew.yourbutler.realestates.domain.RealestateDocument;
import com.ficrew.yourbutler.realestates.presentation.request.SearchCondition;
import com.ficrew.yourbutler.realestates.presentation.response.SearchResponse;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RealestateEsFacade {
    private final SearchRealestateDetailsProcessor searchRealestateDetailsProcessor;
    private final SearchAllRealestatesProcessor searchAllRealestatesProcessor;

    public List<RealestateDocument> searchProperties(SearchCondition condition) {
        return searchAllRealestatesProcessor.execute(condition);
    }

    public RealestateDocument searchDetails(Long realestateId) {
        return searchRealestateDetailsProcessor.execute(realestateId);
    }
}
