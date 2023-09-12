package com.ficrew.yourbutler.member.application.command;

import com.ficrew.yourbutler.member.domain.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class CreateMemberCommand {

    private String email;
    private String nickname;
    private Integer age;
    private Integer holdingAsset;
    private Integer creditRating;
    private Integer monthlyAvailableAsset;
    private String numberOfHouses;
}
