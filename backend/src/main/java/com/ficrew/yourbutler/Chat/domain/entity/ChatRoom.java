package com.ficrew.yourbutler.Chat.domain.entity;

import lombok.Getter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Getter
public class ChatRoom {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long aptId;

    private Long userId;

    public ChatRoom(Long aptId, Long userId) {
        this.aptId = aptId;
        this.userId = userId;
    }

    protected ChatRoom() {

    }

}
