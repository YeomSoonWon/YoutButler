package com.ficrew.yourbutler.realestates.domain;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import javax.persistence.Id;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.elasticsearch.annotations.Document;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Document(indexName = "realestates_new")
public class RealestateDocument {
    @Id
    private String id;
    private Long articleNo;
    private Long complexNo;
    private Float hscpNo;
    private Float ptpNo;
    private String tradeTypeCode;
    private String complexName;
    private String sidoName;
    private String guName;
    private String dongName;
    private String address;
    private Float latitude;
    private Float longitude;
    private String roomType;
    private String realEstateTypeName;
    private String floorInfo;
    private String buildingName;
    private String dealOrWarrantPrc;
    private String rentPrc;
    private Float supplyArea;
    private Float exclusiveArea;
    private Integer exclusiveRate;
    private String direction;
    private ArrayList<String> tagList;
    private String description;
    private String realtorName;
    private String realtorAddress;
    private String realtorcellPhoneNo;
    private Long articleConfirmYmd; //
    private Float roomCnt;
    private String bathroomCnt;
    private Float maintenanceFee;
    private String lawUsage;
    private String approvalDate;
    private Float years_difference;
    private Float dealOrWarrantPrc_numeric;
    private Float rentPrc_numeric;

    @Override
    public String toString() {
        return "RealestateDocument{" +
            "id='" + id + '\'' +
            ", articleNo=" + articleNo +
            ", complexNo=" + complexNo +
            ", hscpNo=" + hscpNo +
            ", ptpNo=" + ptpNo +
            ", tradeTypeCode='" + tradeTypeCode + '\'' +
            ", complexName='" + complexName + '\'' +
            ", sidoName='" + sidoName + '\'' +
            ", guName='" + guName + '\'' +
            ", dongName='" + dongName + '\'' +
            ", address='" + address + '\'' +
            ", latitude=" + latitude +
            ", longitude=" + longitude +
            ", roomType='" + roomType + '\'' +
            ", realEstateTypeName='" + realEstateTypeName + '\'' +
            ", floorInfo='" + floorInfo + '\'' +
            ", buildingName='" + buildingName + '\'' +
            ", dealOrWarrantPrc='" + dealOrWarrantPrc + '\'' +
            ", rentPrc='" + rentPrc + '\'' +
            ", supplyArea=" + supplyArea +
            ", exclusiveArea=" + exclusiveArea +
            ", exclusiveRate=" + exclusiveRate +
            ", direction='" + direction + '\'' +
            ", tagList=" + tagList +
            ", description='" + description + '\'' +
            ", realtorName='" + realtorName + '\'' +
            ", realtorAddress='" + realtorAddress + '\'' +
            ", realtorcellPhoneNo='" + realtorcellPhoneNo + '\'' +
            ", articleConfirmYmd=" + articleConfirmYmd +
            ", roomCnt=" + roomCnt +
            ", bathroomCnt='" + bathroomCnt + '\'' +
            ", maintenanceFee=" + maintenanceFee +
            ", lawUsage='" + lawUsage + '\'' +
            ", approvalDate='" + approvalDate + '\'' +
            ", years_difference=" + years_difference +
            ", dealOrWarrantPrc_numeric=" + dealOrWarrantPrc_numeric +
            ", rentPrc_numeric=" + rentPrc_numeric +
            '}';
    }
}
