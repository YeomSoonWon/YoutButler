package com.ficrew.yourbutler.realestates.domain;

import java.util.Date;
import java.util.List;
import javax.persistence.Id;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.elasticsearch.annotations.Field;
import org.springframework.data.elasticsearch.annotations.FieldType;
import org.springframework.data.elasticsearch.annotations.Mapping;
import org.springframework.data.elasticsearch.annotations.Setting;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Document(indexName = "realestates")
@Mapping(mappingPath = "elastic/realestate-mapping.json")
@Setting(settingPath = "elastic/realestate-setting.json")
public class RealestateDocument {

    @Id
    private String articleNo; // TODO
    private Integer complexNo;
    private Integer hscpNo;
    private Integer ptpNo;
    @Field(type = FieldType.Text, analyzer = "korean_mixed") // Nori 분석기 사용
    private String complexName;
    private String sidoName;
    private String guName;
    private String dongName;
    private String address;
    private Double latitude;
    private Double longitude;
    private String roomType;
    private String realEstateTypeName;
    private String floorInfo;
    private String buildingName;
    private String dealOrWarrantPrc;
    private Integer rentPrc;
    private Double supplyArea;
    private Double exclusiveArea;
    private Double exclusiveRate;
    private String direction;
    private List<String> tagList; // TODO
    private String description;
    private String realtorName;
    private String realtorAddress;
    private String realtorcellPhoneNo;
    private Date articleConfirmYmd; // TODO
    private Integer roomCnt;
    private Integer bathroomCnt;
    private Integer maintenanceFee;
    private String lawUsage;
    private Date approvalDate; // TODO
    private Object formatted_image_list; // TODO
    private Integer years_difference;

}
