package com.ficrew.yourbutler.Chat.presentation;

import com.ficrew.yourbutler.Chat.application.facade.ChatFacade;
import com.ficrew.yourbutler.Chat.presentation.request.CreateMessageRequest;
import com.ficrew.yourbutler.global.auth.AuthenticatedMember;
import com.ficrew.yourbutler.member.presentation.request.CreateMemberRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/v1/chats")
@RequiredArgsConstructor
public class ChatController {

    private final ChatFacade chatFacade;

    // 내가 참가한 채팅방 번호 아니면 오류 띄우는 메세지도 만들어야 함
    @PostMapping
    public ResponseEntity<String> createMessage(@RequestBody @Valid CreateMessageRequest request, @AuthenticationPrincipal AuthenticatedMember member) {
        chatFacade.createMessage(request.toCommand(), member);
        return new ResponseEntity<>("채팅 전송 완료", HttpStatus.OK);
    }

}
