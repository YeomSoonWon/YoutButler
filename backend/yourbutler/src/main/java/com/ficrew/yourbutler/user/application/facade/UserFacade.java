package com.ficrew.yourbutler.user.application.facade;

import com.ficrew.yourbutler.user.application.CreateUserProcessor;
import com.ficrew.yourbutler.user.application.command.CreateUserCommand;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UserFacade {

    private final CreateUserProcessor createUserProcessor;

    @Transactional
    public void createUser(CreateUserCommand command) {
        createUserProcessor.execute(command);
    }


}
