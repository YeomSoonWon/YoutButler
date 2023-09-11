package com.ficrew.yourbutler.member.application.command;

import com.ficrew.yourbutler.member.domain.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class CreateMemberCommand {

    private String email;
    private String password;


    public Member toEntity(String encryptedPassword) {
        return new Member(
            this.email,
            encryptedPassword
        );
    }
}
