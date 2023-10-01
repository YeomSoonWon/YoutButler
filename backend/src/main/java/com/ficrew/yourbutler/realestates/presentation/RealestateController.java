package com.ficrew.yourbutler.realestates.presentation;

import com.ficrew.yourbutler.realestates.application.facade.ElasticSearchFacade;
import com.ficrew.yourbutler.realestates.presentation.request.SearchCondition;
import com.ficrew.yourbutler.realestates.presentation.response.SearchResponse;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/realestates")
@RequiredArgsConstructor
public class RealestateController {


    private final ElasticSearchFacade elasticSearchFacade;

    @PostMapping("/search")
    public ResponseEntity<List<SearchResponse>> search(@RequestBody SearchCondition condition) {
        List<SearchResponse> results = elasticSearchFacade.searchProperties(condition);
        return ResponseEntity.ok(results);
    }
}
