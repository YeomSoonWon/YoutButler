package com.ficrew.yourbutler.member.application.command;

import com.ficrew.yourbutler.member.domain.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class CreateMemberCommand {

    private String email;
    private String nickname;


    public Member toEntity(String encryptedPassword) {
        return new Member(
            this.email,
            this.nickname,
            encryptedPassword
        );
    }
}
