package com.ficrew.yourbutler.Chat.infrastructure.persistence.jpa;

import com.ficrew.yourbutler.Chat.domain.entity.ChatRoom;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface JpaChatRoomRepository extends JpaRepository<ChatRoom, Long> {

    // 사용자 id와 입력받고 해당하는 채팅방을 모두 반환하는 메소드
    List<ChatRoom> findAllByUserId(Long userId);

    // 사용자 id와 아파트 id를 입력받고 해당하는 채팅방을 반환하는 메소드
    ChatRoom findByUserIdAndAptId(Long userId, Long aptId);

    // 채팅 메세지를 입력받고 채팅방에 메세지를 추가하는 메소드

}
