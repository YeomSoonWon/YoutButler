package com.ficrew.yourbutler.member.application;

import com.ficrew.yourbutler.global.auth.PasswordEncrypter;
import com.ficrew.yourbutler.member.application.command.CreateMemberCommand;
import com.ficrew.yourbutler.member.domain.exception.DuplicatedUserEmailException;
import com.ficrew.yourbutler.member.domain.repository.MemberRepository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class CreateMemberProcessor {

    private final MemberRepository memberRepository;
    private final PasswordEncrypter passwordEncrypter;

    public void execute(CreateMemberCommand command) {
        if (memberRepository.existsByEmail(command.getEmail())) {
            throw new DuplicatedUserEmailException();
        }

        String encryptedPassword = passwordEncrypter.encrypt(command.getPassword());
        memberRepository.save(command.toEntity(encryptedPassword));
    }
}
