package com.ficrew.yourbutler.Chat.application.facade;

import com.ficrew.yourbutler.Chat.application.CreateMessageProcessor;
import com.ficrew.yourbutler.Chat.application.command.CreateMessageCommand;
import com.ficrew.yourbutler.global.auth.AuthenticatedMember;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
public class ChatFacade {

    private final CreateMessageProcessor createMessageProcessor;

    @Transactional
    public void createMessage(CreateMessageCommand command, AuthenticatedMember member) {
        createMessageProcessor.execute(command, member);
    }

}
