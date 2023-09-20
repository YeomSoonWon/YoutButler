package com.ficrew.yourbutler.member.application.command;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class CreateMemberCommand {
    private String identifier;
    private String socialType;
    private String email;
    private String nickname;
    private Integer age;
    private Integer holdingAsset;
    private Integer creditRating;
    private Integer monthlyAvailableAsset;
    private String numberOfHouses;
}
