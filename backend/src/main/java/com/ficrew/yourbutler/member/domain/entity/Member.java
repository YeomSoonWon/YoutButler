package com.ficrew.yourbutler.member.domain.entity;

import com.ficrew.yourbutler.global.auth.Role;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.ficrew.yourbutler.member.application.command.CreateMemberCommand;
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
    @Enumerated(EnumType.STRING)
    private NumberOfHouses numberOfHouses;

    public Member(String email, String nickname, String encryptedPassword) {
        this.email = email;
        this.nickname = nickname;
        this.password = encryptedPassword;
        this.role = Role.MEMBER;
        this.numberOfHouses = NumberOfHouses.NONE;
    }

    public void update(CreateMemberCommand command) {
        this.age = command.getAge();
        this.holdingAsset = command.getHoldingAsset();
        this.creditRating = command.getCreditRating();
        this.monthlyAvailableAsset = command.getMonthlyAvailableAsset();
        this.numberOfHouses = NumberOfHouses.valueOf(command.getNumberOfHouses());
    }

    protected Member() {
    }
}
