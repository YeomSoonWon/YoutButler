package com.ficrew.yourbutler.user.application.facade;

import com.ficrew.yourbutler.user.application.CreateMemberProcessor;
import com.ficrew.yourbutler.user.application.command.CreateMemberCommand;
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
