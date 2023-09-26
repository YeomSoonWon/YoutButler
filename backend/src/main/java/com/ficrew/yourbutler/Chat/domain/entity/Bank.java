package com.ficrew.yourbutler.Chat.domain.entity;

import lombok.Getter;

import javax.persistence.*;

/**
 * id, 은행이름, 은행전화번호, 은행사이트
 */
@Entity
@Getter
public class Bank {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String bankName;

    @Column(nullable = false)
    private String bankTel;

    @Column(nullable = false)
    private String bankSite;

}
