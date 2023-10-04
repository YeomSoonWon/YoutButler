package com.ficrew.yourbutler.realestates.presentation.response;

import com.ficrew.yourbutler.realestates.domain.entity.RealestateDocument;
import java.util.List;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class SearchListResponse {


    private final Integer size;
    private final Integer from;
    private final List<SearchResponse> roomTypeList;

    public static SearchListResponse from(Integer size, Integer from,
        List<RealestateDocument> realestateDocuments) {
        return null;
    }

    @Getter
    @RequiredArgsConstructor
    private static class SearchResponse {

        private final Long realestateId;
        private final String roomType;
        private final String complexName;
        private final String realEstateTypeName;
        private final String sidoName;
        private final String guName;
        private final String dongName;
        private final String address;
        private final Double latitude;
        private final Double longitude;
        private final String descriptionTagList;
        private final String dealOrWarrantPrc;
        private final String rentPrc;
        private final String floorInfo;
        private final Integer pyeong;
        private final Double supplyArea;
        private final Double exclusiveArea;
        private final Long maintenanceFee;
        private final String color;
        private final Object imageSrc; // TODO
        private final BookmarkCheckResponse bookmark;

        private static SearchResponse from(
            RealestateDocument realestateDocument
        ) {
            return new SearchResponse(
                realestateDocument.getArticleNo(),
                realestateDocument.getRoomType(),
                realestateDocument.getComplexName(),
                realestateDocument.getRealEstateTypeName(),
                realestateDocument.getSidoName(),
                realestateDocument.getGuName(),
                realestateDocument.getDongName(),
                realestateDocument.getAddress(),
                realestateDocument.getLatitude(),
                realestateDocument.getLongitude(),
                realestateDocument.getTagList(),
                realestateDocument.getDealOrWarrantPrc(),
                realestateDocument.getRentPrc(),
                realestateDocument.getFloorInfo(),
                3,
                realestateDocument.getSupplyArea(),
                realestateDocument.getExclusiveArea(),
                realestateDocument.getMaintenanceFee(),
                "green", // TODO
                realestateDocument.getFormatted_image_list(),
                new BookmarkCheckResponse( // TODO
                    true,
                    true
                )
            );
        }

    }


}