package com.ficrew.yourbutler.Chat.domain.entity;

import com.ficrew.yourbutler.member.domain.entity.Member;
import lombok.Getter;

import javax.persistence.*;

@Entity
@Getter
public class ChatRoom {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long aptId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id", nullable = false)
    private Member member;

    public ChatRoom(Long aptId, Member member) {
        this.aptId = aptId;
        this.member = member;
    }

    protected ChatRoom() {

    }

}
