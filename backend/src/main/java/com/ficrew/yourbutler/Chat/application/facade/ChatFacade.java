package com.ficrew.yourbutler.Chat.application.facade;

import com.ficrew.yourbutler.Chat.application.CreateMessageProcessor;
import com.ficrew.yourbutler.Chat.application.GetMessageListProcessor;
import com.ficrew.yourbutler.Chat.application.command.CreateMessageCommand;
import com.ficrew.yourbutler.Chat.application.result.MessageResult;
import com.ficrew.yourbutler.Chat.application.result.MessageResultList;
import com.ficrew.yourbutler.global.auth.AuthenticatedMember;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
public class ChatFacade {

    private final CreateMessageProcessor createMessageProcessor;
    private final GetMessageListProcessor getMessageListProcessor;

    @Transactional
    public MessageResult createMessage(CreateMessageCommand command, AuthenticatedMember member) {
        return createMessageProcessor.execute(command, member);
    }

    @Transactional
    public MessageResultList getMessageList(Long aptId, AuthenticatedMember member) {
        return getMessageListProcessor.execute(aptId, member);
    }

}
