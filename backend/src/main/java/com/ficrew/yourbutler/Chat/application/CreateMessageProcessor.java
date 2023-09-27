package com.ficrew.yourbutler.Chat.application;

import com.ficrew.yourbutler.Chat.application.command.CreateMessageCommand;
import com.ficrew.yourbutler.Chat.application.result.FlaskResult;
import com.ficrew.yourbutler.Chat.application.result.MessageResult;
import com.ficrew.yourbutler.Chat.domain.entity.ChatRoom;
import com.ficrew.yourbutler.Chat.domain.entity.Message;
import com.ficrew.yourbutler.Chat.domain.repository.ChatRepository;
import com.ficrew.yourbutler.Chat.domain.repository.MessageRepository;
import com.ficrew.yourbutler.global.auth.AuthenticatedMember;
import com.ficrew.yourbutler.member.domain.entity.Member;
import com.ficrew.yourbutler.member.domain.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.HashMap;

@RequiredArgsConstructor
public class CreateMessageProcessor {

    private final ChatRepository chatRepository;
    private final MessageRepository messageRepository;
    private final MemberRepository memberRepository;
    private final WebClient webClient = WebClient.create("http://localhost:5000");

    public MessageResult execute(CreateMessageCommand command, AuthenticatedMember member) {
        ChatRoom chatRoom;
        Member memberEntity = memberRepository.findById(member.getId());

        // 없는 채팅방일 경우 새로운 채팅방을 만들고 반환함
        if (command.getChatRoomNo() == -1) {
            chatRoom = new ChatRoom(command.getAptNo(), memberEntity);
            chatRepository.save(chatRoom);
        } else {
            chatRoom = chatRepository.findById(command.getChatRoomNo());
        }

        Message message = new Message(command.getIsBot(), command.getMessage(), chatRoom);
        messageRepository.save(message);

        // Flask 서버로 요청을 보내는 부분 추가
        HashMap<String, String> hm = new HashMap<>();
        hm.put("user_message", command.getMessage());

        FlaskResult flaskResult = webClient.post()
                .uri("/api/chat")
                .bodyValue(hm)
                .retrieve()
                .bodyToMono(FlaskResult.class)
                .block();

        if (flaskResult == null) {
            throw new NullPointerException("Flask 서버로부터 응답이 없습니다.");
        }

        Message botMessage = new Message(true, flaskResult.getResponse(), chatRoom);
        messageRepository.save(botMessage);
        return new MessageResult(message);
    }

}
