package com.ficrew.yourbutler.member.application.facade;

import com.ficrew.yourbutler.member.application.CreateMemberProcessor;
import com.ficrew.yourbutler.member.application.SignInMemberProcessor;
import com.ficrew.yourbutler.member.application.command.CreateMemberCommand;
import com.ficrew.yourbutler.member.application.command.SignInCommand;
import com.ficrew.yourbutler.member.application.result.SignInResult;
import com.ficrew.yourbutler.member.presentation.request.SignInRequest;
import com.ficrew.yourbutler.member.presentation.response.SignInResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class MemberFacade {

    private final CreateMemberProcessor createMemberProcessor;
    private final SignInMemberProcessor signInMemberProcessor;

    @Transactional
    public void createMember(CreateMemberCommand command, UserDetails user) {
        createMemberProcessor.execute(command, user);
    }
    @Transactional
    public SignInResult signInMember(SignInCommand signInCommand) {
        return signInMemberProcessor.execute(signInCommand);
    }
}
