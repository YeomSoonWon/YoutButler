package com.ficrew.yourbutler.member.presentation.response;

import com.ficrew.yourbutler.member.domain.entity.Member;
import lombok.Getter;

@Getter
public class MemberResponse {
    String email;
    String nickname;
    Integer age;
    Integer holdingAsset;
    Integer creditRating;
    Integer monthlyAvailableAsset;
    String numberOfHouses;

    public MemberResponse(Member member) {
        this.email = member.getEmail();
        this.nickname = member.getNickname();
        this.age = member.getAge();
        this.holdingAsset = member.getHoldingAsset();
        this.creditRating = member.getCreditRating();
        this.monthlyAvailableAsset = member.getMonthlyAvailableAsset();
        this.numberOfHouses = member.getNumberOfHouses().name();
    }
}
