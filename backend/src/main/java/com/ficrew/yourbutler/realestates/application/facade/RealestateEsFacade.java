package com.ficrew.yourbutler.realestates.application.facade;

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

    public List<SearchResponse> searchProperties(SearchCondition condition) {
        return null;
    }

    public RealestateDocument searchDetails(Long realestateId) {
        return searchRealestateDetailsProcessor.execute(realestateId);
    }
}
