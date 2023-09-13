package com.ficrew.yourbutler.member.application.facade;

import com.ficrew.yourbutler.global.auth.AuthenticatedMember;
import com.ficrew.yourbutler.member.application.CreateMemberProcessor;
import com.ficrew.yourbutler.member.application.SignInMemberProcessor;
import com.ficrew.yourbutler.member.application.command.CreateMemberCommand;
import com.ficrew.yourbutler.member.application.command.SignInCommand;
import com.ficrew.yourbutler.member.application.result.SignInResult;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class MemberFacade {

    private final CreateMemberProcessor createMemberProcessor;
    private final SignInMemberProcessor signInMemberProcessor;

    @Transactional
    public void createMember(CreateMemberCommand command, AuthenticatedMember member) {
        createMemberProcessor.execute(command, member);
    }
    @Transactional
    public SignInResult signInMember(SignInCommand signInCommand) {
        return signInMemberProcessor.execute(signInCommand);
    }
}
