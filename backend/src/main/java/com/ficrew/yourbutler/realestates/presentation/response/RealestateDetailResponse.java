package com.ficrew.yourbutler.realestates.presentation.response;

import com.ficrew.yourbutler.realestates.domain.RealestateDocument;

public class RealestateDetailResponse {

    public static RealestateDetailResponse from(RealestateDocument realestateDocument) {
        realestateDocument.toString();
        return null;
    }
    /*
”realestateId” : 2340933163, // (elasticsearch에서는 articleNo)
        "complexNo": 1165010700, // 주택 번호
        "complexName": “아크로리버파크”, // 주택 이름
        "roomType": “아파트”, // 방종류 (오피스텔, 등)
        "realEstateTypeName": “매매”, // 거래 방식
        "address": “서울시 강남구 역삼동”, // 주소
        "dealOrWarrantPrc": “3억 7000” , // 매매가 혹은 월/전세 보증금 (없으면 null / 만원 단위)
        ”dealOrWarrantPrc_numeric” : 370000000, //(없으면 null)
        "rentPrc": “32”, // 월세 (없으면 null / string 타입 / 만원 단위)
        ”rentPrc_numeric” : 320000,  //(없으면 null)
        "maintenanceFee": 250000, // 관리비 (없으면 null)
        "imageList": [ // 이미지 리스트(없으면 null)
    {
        "imageOrder": 0,
        "imageSrc": “http://image.djflajdl”
    },
    {
        "imageOrder": 1,
        "imageSrc": “http://image.djflajdl”
    }
],
    "details": {
”tagList” : ['25년이상', '역세권', '방세개', '화장실한개'], //(없으면 null)
        "floorInfo": “4/15”, //(없으면 null)
        "buildingName": “101동”, (동 이름 혹은 빌딩 이름 적혀 있음)(없으면 null)
        "supplyArea": 81.43, // (단위: 제곱미터)(없으면 null)
            "exclusiveArea": 59.82, (단위: 제곱미터) (없으면 null)
”exclusiveRate”: 73 // (공급면적대비 전용면적 비율)
        "roomCnt": 3, (없으면 null)
        "bathroomCnt": 2, //(없으면 null)
            "direction": “남서향”, //(없으면 null)
        "lawUsage": “공동주택”, // (없으면 null)
        "approvalDate": “19970516”, // 사용 승인일
        "articleConfirmYmd": “20230831”, // 부동산 매물 등록일
        "realtor": { // (없으면 null)
”name": “리버파크단지내공인중개사사무소”,
            "cellPhoneNo": “031-2374-6385”,
            "address": “강남구 어쩌구”
        }
    }

     */
}
