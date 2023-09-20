package com.ficrew.yourbutler.member.presentation.response;

import com.ficrew.yourbutler.member.domain.entity.Member;
import lombok.Getter;

@Getter
public class MemberResponse {
    private String identifier;
    private String socialType;
    private String email;
    private String nickname;
    private Integer age;
    private Integer holdingAsset;
    private Integer creditRating;
    private Integer monthlyAvailableAsset;
    private String numberOfHouses;

    public MemberResponse(Member member) {
        this.identifier = member.getIdentifier();
        this.socialType = member.getSocialType();
        this.email = member.getEmail();
        this.nickname = member.getNickname();
        this.age = member.getAge();
        this.holdingAsset = member.getHoldingAsset();
        this.creditRating = member.getCreditRating();
        this.monthlyAvailableAsset = member.getMonthlyAvailableAsset();
        this.numberOfHouses = member.getNumberOfHouses().name();
    }
}
