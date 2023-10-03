package com.ficrew.yourbutler.realestates.presentation;

import com.ficrew.yourbutler.realestates.application.facade.RealestateEsFacade;
import com.ficrew.yourbutler.realestates.domain.RealestateDocument;
import com.ficrew.yourbutler.realestates.presentation.request.SearchCondition;
import com.ficrew.yourbutler.realestates.presentation.response.RealestateDetailResponse;
import com.ficrew.yourbutler.realestates.presentation.response.SearchResponse;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("/api/v1/realestates")
@RequiredArgsConstructor
public class RealestateController {

    // TODO layeredarchitecture에 맞게 수정 필요

    private final RealestateEsFacade realestateEsFacade;

    @PostMapping("/search")
    public ResponseEntity<List<SearchResponse>> search(@RequestBody SearchCondition condition) {
        List<SearchResponse> results = SearchResponse.from(realestateEsFacade.searchProperties(condition));
        return ResponseEntity.ok(results);
    }
    @GetMapping("/{realestateId}")
    public ResponseEntity<RealestateDetailResponse> searchByArticleNo(@PathVariable Long realestateId) {
        var result = RealestateDetailResponse.from(realestateEsFacade.searchDetails(realestateId));
        return ResponseEntity.ok(result);
    }
}
