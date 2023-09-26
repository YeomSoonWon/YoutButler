package com.ficrew.yourbutler.Chat.infrastructure.persistence;

import com.ficrew.yourbutler.Chat.domain.entity.ChatRoom;
import com.ficrew.yourbutler.Chat.domain.repository.ChatRepository;
import com.ficrew.yourbutler.Chat.infrastructure.persistence.jpa.JpaChatRoomRepository;
import com.ficrew.yourbutler.Chat.infrastructure.persistence.jpa.JpaMessageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class ChatRepositoryAdapter implements ChatRepository {

    private final JpaChatRoomRepository chatRoomRepository;

    @Override
    public ChatRoom save(ChatRoom chatRoom) {
        return chatRoomRepository.save(chatRoom);
    }

    @Override
    public ChatRoom findByUserIdAndAptId(Long userId, Long aptId) {
        return chatRoomRepository.findByUserIdAndAptId(userId, aptId);
    }

    @Override
    public ChatRoom findById(Long chatRoomId) {
        return chatRoomRepository.findById(chatRoomId).get();
    }

}
