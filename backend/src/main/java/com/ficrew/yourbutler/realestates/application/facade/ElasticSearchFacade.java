package com.ficrew.yourbutler.realestates.application.facade;

import com.ficrew.yourbutler.realestates.presentation.request.SearchCondition;
import com.ficrew.yourbutler.realestates.presentation.response.SearchResponse;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ElasticSearchFacade {

    public List<SearchResponse> searchProperties(SearchCondition condition) {
        return null;
    }
}
