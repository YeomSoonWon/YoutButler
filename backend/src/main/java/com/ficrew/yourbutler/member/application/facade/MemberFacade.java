package com.ficrew.yourbutler.member.application.facade;

import com.ficrew.yourbutler.member.application.CreateMemberProcessor;
import com.ficrew.yourbutler.member.application.command.CreateMemberCommand;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class MemberFacade {

    private final CreateMemberProcessor createMemberProcessor;

    @Transactional
    public void createUser(CreateMemberCommand command) {
        createMemberProcessor.execute(command);
    }


}
