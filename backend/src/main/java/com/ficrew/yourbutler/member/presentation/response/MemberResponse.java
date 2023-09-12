package com.ficrew.yourbutler.member.presentation.response;

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
}
