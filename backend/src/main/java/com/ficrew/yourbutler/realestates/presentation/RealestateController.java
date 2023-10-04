package com.ficrew.yourbutler.realestates.presentation;

import com.ficrew.yourbutler.global.auth.AuthenticatedMember;
import com.ficrew.yourbutler.realestates.application.facade.RealestateFacade;
import com.ficrew.yourbutler.realestates.application.command.SearchCommand;
import com.ficrew.yourbutler.realestates.application.facade.RealestateEsFacade;
import com.ficrew.yourbutler.realestates.domain.RoomType;
import com.ficrew.yourbutler.realestates.domain.TradeType;
import com.ficrew.yourbutler.realestates.presentation.response.BookmarkCheckResponse;
import com.ficrew.yourbutler.realestates.presentation.response.BookmarkListResponse;
import com.ficrew.yourbutler.realestates.presentation.response.BookmarkStatusResponse;
import com.ficrew.yourbutler.realestates.presentation.response.RealestateDetailResponse;
import com.ficrew.yourbutler.realestates.presentation.response.SearchResponse;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("/api/v1/realestates")
@RequiredArgsConstructor
public class RealestateController {

    // TODO layeredarchitecture에 맞게 수정 필요
    // TODO 파라미터 default value 수정?

    private final RealestateEsFacade realestateEsFacade;
    private final RealestateFacade realestateFacade;

    @GetMapping("/search")
    public ResponseEntity<List<SearchResponse>> search(
        @RequestParam(value = "size", defaultValue = "10") Integer size,
        @RequestParam(value = "from", defaultValue = "0") Integer from,
        @RequestParam(value = "keyword", required = false) String keyword,
        @RequestParam(value = "realestate-asset", defaultValue = "0") Long realestateAsset,
        @RequestParam(value = "monthly-asset", defaultValue = "0") Long monthlyAvailableAsset,
        @RequestParam(value = "trade-type", defaultValue = "RENT") TradeType tradeType,
        @RequestParam(value = "room-type ", defaultValue = "APT") List<RoomType> roomTypeList,
        @RequestParam(value = "dw-min", defaultValue = "0") Long dwMin,
        @RequestParam(value = "dw-max", required = false) Long dwMax,
        @RequestParam(value = "dp-min", defaultValue = "0") Long dpMin,
        @RequestParam(value = "dp-max", required = false) Long dpMax,
        @RequestParam(value = "rp-min", defaultValue = "0") Long rpMin,
        @RequestParam(value = "rp-max", required = false) Long rpMax,
        @RequestParam(value = "mf-min", defaultValue = "0") Long mfMin,
        @RequestParam(value = "mf-max", required = false) Long mfMax,
        @RequestParam(value = "rs-min", defaultValue = "0") Long rsMin,
        @RequestParam(value = "rs-max", required = false) Long rsMax,
        @RequestParam(value = "uay", defaultValue = "16") Integer uay
    ) {
        List<SearchResponse> results = SearchResponse.from(realestateEsFacade.searchProperties(
            new SearchCommand(
                size,
                from,
                keyword,
                realestateAsset,
                monthlyAvailableAsset,
                tradeType,
                roomTypeList,
                dwMin,
                dwMax,
                dpMin,
                dpMax,
                rpMin,
                rpMax,
                mfMin,
                mfMax,
                rsMin,
                rsMax,
                uay
            )
        ));
        return ResponseEntity.ok(results);
    }
    @GetMapping("/{realestateId}")
    public ResponseEntity<RealestateDetailResponse> searchByArticleNo(
        @AuthenticationPrincipal AuthenticatedMember member,
        @PathVariable Long realestateId
    ) {
        BookmarkCheckResponse bookmarkCheckResponse;
        if (member == null) {
            bookmarkCheckResponse = new BookmarkCheckResponse(false, false);
        } else {
            bookmarkCheckResponse = new BookmarkCheckResponse(true, realestateFacade.isBookmarked(realestateId));
        }
        RealestateDetailResponse result = RealestateDetailResponse.from(realestateEsFacade.searchDetails(realestateId), bookmarkCheckResponse);

        return ResponseEntity.ok(result);
    }

    @PostMapping("/{realestateId}/check")
    public ResponseEntity<BookmarkStatusResponse> checkBoookmark(
        @AuthenticationPrincipal AuthenticatedMember member,
        @PathVariable Long realestateId
    ) {
        return ResponseEntity.ok(BookmarkStatusResponse.from(realestateFacade.createBookmark(member.getId(), realestateId)));
    }

    @DeleteMapping("/{realestateId}/uncheck")
    public ResponseEntity<BookmarkStatusResponse> uncheckBookmark(
        @AuthenticationPrincipal AuthenticatedMember member,
        @PathVariable Long realestateId
    ) {
        return ResponseEntity.ok(BookmarkStatusResponse.from(realestateFacade.deleteBookmark(member.getId(), realestateId)));
    }

    @GetMapping("/bookmarks")
    public ResponseEntity<BookmarkListResponse> getBookmarkList(
        @AuthenticationPrincipal AuthenticatedMember member
    ) {
        return ResponseEntity.ok(BookmarkListResponse.from(realestateEsFacade.getBookmarkedList(member.getId())));
    }

}
