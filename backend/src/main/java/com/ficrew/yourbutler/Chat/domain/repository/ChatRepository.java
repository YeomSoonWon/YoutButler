package com.ficrew.yourbutler.Chat.domain.repository;

import com.ficrew.yourbutler.Chat.domain.entity.ChatRoom;

public interface ChatRepository {

    ChatRoom save(ChatRoom chatRoom);

    ChatRoom findByUserIdAndAptId(Long userId, Long aptId);

    ChatRoom findById(Long chatRoomId);

}
