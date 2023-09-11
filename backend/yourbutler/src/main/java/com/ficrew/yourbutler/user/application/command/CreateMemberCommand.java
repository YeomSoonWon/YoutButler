package com.ficrew.yourbutler.user.application.command;

import com.ficrew.yourbutler.user.domain.entity.Member;
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
