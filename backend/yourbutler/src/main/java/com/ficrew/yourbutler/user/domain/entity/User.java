package com.ficrew.yourbutler.user.domain.entity;

import com.ficrew.yourbutler.global.auth.Role;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;

@Entity
@Getter
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;
    private String password;
    @Enumerated(EnumType.STRING)
    private Role role;


    public User(String email, String encryptedPassword) {
        this.email = email;
        this.password = encryptedPassword;
        this.role = Role.USER;
    }

    protected User() {
    }
}
