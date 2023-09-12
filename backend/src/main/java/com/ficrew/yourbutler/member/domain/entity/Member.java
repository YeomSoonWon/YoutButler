package com.ficrew.yourbutler.member.domain.entity;

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
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;
    private String nickname;
    private String password;
    @Enumerated(EnumType.STRING)
    private Role role;
    private Integer age;
    private Integer holdingAsset;
    private Integer creditRating;
    private Integer monthlyAvailableAsset;
    private NumberOfHouses numberOfHouses;

    public Member(String email, String nickname, String encryptedPassword) {
        this.email = email;
        this.nickname = nickname;
        this.password = encryptedPassword;
        this.role = Role.MEMBER;
    }

    protected Member() {
    }
}
