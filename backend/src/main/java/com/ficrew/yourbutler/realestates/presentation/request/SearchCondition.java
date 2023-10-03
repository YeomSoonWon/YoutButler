package com.ficrew.yourbutler.realestates.presentation.request;

import com.ficrew.yourbutler.realestates.domain.RoomType;
import com.ficrew.yourbutler.realestates.domain.TradeType;

public class SearchCondition {

    private String textKeyword;
    private TradeType tradeType; // 거래 유형: 매매, 월세, 전세
    private RoomType roomType; // 방종류: 아파트, 오피스텔, 단독다가구, 원룸, 빌라연립, 주택(상가, 한옥, ..)
    // 가격
    private Long depositMin; // 보증금/전세가 최소
    private Long depositMax;
    private Long dealPrcMin; // 매매가 최소
    private Long dealPrcMax;
    private Long rentPrcMin; // 월세
    private Long rentPrcMax;


}
