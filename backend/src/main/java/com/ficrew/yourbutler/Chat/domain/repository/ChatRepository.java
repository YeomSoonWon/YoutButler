package com.ficrew.yourbutler.Chat.domain.repository;

import com.ficrew.yourbutler.Chat.domain.entity.ChatRoom;
import com.ficrew.yourbutler.member.domain.entity.Member;

public interface ChatRepository {

    ChatRoom save(ChatRoom chatRoom);

    ChatRoom findByMemberAndAptId(Member member, Long aptId);

    ChatRoom findById(Long chatRoomId);

}
