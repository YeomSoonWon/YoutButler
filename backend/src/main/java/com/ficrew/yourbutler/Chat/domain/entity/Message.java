package com.ficrew.yourbutler.Chat.domain.entity;

import lombok.Getter;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Boolean isBot;

    @Column(nullable = false)
    @CreationTimestamp
    private LocalDateTime timeStamp;

    @Column(nullable = false, length = 1000)  // Adjust length as needed
    private String message;

//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "loan_id")
    @Embedded
    private Loan loan;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "bank_id")
    private Bank bank;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "chatroom_id", nullable = false)
    private ChatRoom chatRoom;

    public Message(Boolean isBot, String message, ChatRoom chatRoom) {
        this.isBot = isBot;
        this.message = message;
        this.chatRoom = chatRoom;
    }

    public Message(Boolean isBot, String message, Loan loan, Bank bank, ChatRoom chatRoom) {
        this.isBot = isBot;
        this.message = message;
        this.loan = loan;
        this.bank = bank;
        this.chatRoom = chatRoom;
    }

    protected Message() {

    }

}
