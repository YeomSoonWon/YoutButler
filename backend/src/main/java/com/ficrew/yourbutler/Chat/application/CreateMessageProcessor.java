package com.ficrew.yourbutler.Chat.application;

import com.ficrew.yourbutler.Chat.application.command.CreateMessageCommand;
import com.ficrew.yourbutler.Chat.application.result.FlaskResult;
import com.ficrew.yourbutler.Chat.application.result.MessageResult;
import com.ficrew.yourbutler.Chat.domain.entity.Bank;
import com.ficrew.yourbutler.Chat.domain.entity.ChatRoom;
import com.ficrew.yourbutler.Chat.domain.entity.Loan;
import com.ficrew.yourbutler.Chat.domain.entity.Message;
import com.ficrew.yourbutler.Chat.domain.repository.BankRepository;
import com.ficrew.yourbutler.Chat.domain.repository.ChatRepository;
import com.ficrew.yourbutler.Chat.domain.repository.MessageRepository;
import com.ficrew.yourbutler.global.auth.AuthenticatedMember;
import com.ficrew.yourbutler.member.domain.entity.Member;
import com.ficrew.yourbutler.member.domain.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.HashMap;

@RequiredArgsConstructor
public class CreateMessageProcessor {

    private static final int NO_CHAT_ROOM = -1;
    private final ChatRepository chatRepository;
    private final MessageRepository messageRepository;
    private final MemberRepository memberRepository;
    private final BankRepository bankRepository;
    private final WebClient webClient;

    @Transactional
    public MessageResult execute(CreateMessageCommand command, AuthenticatedMember member) {
        ChatRoom chatRoom;

        // 없는 채팅방일 경우 새로운 채팅방을 만들고 반환함
        if (command.getChatRoomNo() == NO_CHAT_ROOM) {
            Member memberEntity = memberRepository.findById(member.getId());
            chatRoom = new ChatRoom(command.getRealestateId(), memberEntity, command.getBuildingName());
            chatRepository.save(chatRoom);
        } else {
            chatRoom = chatRepository.findById(command.getChatRoomNo()).orElseThrow(()-> new NullPointerException("예상치 못한 오류 발생 1"));
        }

        Message message = new Message(command.getIsBot(), command.getChat(), chatRoom);
        messageRepository.save(message);

        // Flask 서버로 요청을 보내는 부분 추가
        HashMap<String, String> hm = new HashMap<>();
        hm.put("user_message", command.getChat());

        FlaskResult flaskResult = webClient.post()
                .uri("/api/chat")
                .bodyValue(hm)
                .retrieve()
                .bodyToMono(FlaskResult.class)
                .block();

        if (flaskResult == null) {
            throw new NullPointerException("Flask 서버로부터 응답이 없습니다.");
        }

        Message botMessage;

        if (flaskResult.getLoanName() == null || flaskResult.getLoanName().isEmpty()) {
            botMessage = new Message(true, flaskResult.getMessage() + "\n" + flaskResult.getInformation(), chatRoom);
        } else {
            Loan loan = new Loan(flaskResult.getLoanName(), flaskResult.getLoanInterest());
            Bank bank = new Bank("KB국민은행", "02-245-2013", "https://naver.com");
            bankRepository.save(bank);
            botMessage = new Message(true, flaskResult.getMessage() + "\n" + flaskResult.getInformation(), loan, bank, chatRoom);
        }

        messageRepository.save(botMessage);
        return new MessageResult(botMessage);
    }

}
