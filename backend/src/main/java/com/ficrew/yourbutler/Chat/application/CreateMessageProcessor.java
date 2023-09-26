package com.ficrew.yourbutler.Chat.application;

import com.ficrew.yourbutler.Chat.application.command.CreateMessageCommand;
import com.ficrew.yourbutler.Chat.domain.entity.ChatRoom;
import com.ficrew.yourbutler.Chat.domain.entity.Message;
import com.ficrew.yourbutler.Chat.domain.repository.ChatRepository;
import com.ficrew.yourbutler.Chat.domain.repository.MessageRepository;
import com.ficrew.yourbutler.global.auth.AuthenticatedMember;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class CreateMessageProcessor {

    private final ChatRepository chatRepository;
    private final MessageRepository messageRepository;

    public Long execute(CreateMessageCommand command, AuthenticatedMember member) {
        ChatRoom chatRoom;

        // 없는 채팅방일 경우 새로운 채팅방을 만들고 반환함
        if (command.getChatRoomNo() == -1) {
            chatRoom = new ChatRoom(command.getAptNo(), member.getId());
            chatRepository.save(chatRoom);
        } else {
            chatRoom = chatRepository.findById(command.getChatRoomNo());
        }

        Message message = new Message(command.getIsBot(), command.getMessage(), chatRoom);
        messageRepository.save(message);
        return chatRoom.getId();
    }

}
