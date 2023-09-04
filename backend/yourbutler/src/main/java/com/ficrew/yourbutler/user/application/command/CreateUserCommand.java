package com.ficrew.yourbutler.user.application.command;

import com.ficrew.yourbutler.user.domain.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class CreateUserCommand {

    private String email;
    private String password;


    public User toEntity(String encryptedPassword) {
        return new User(
            this.email,
            encryptedPassword
        );
    }
}
