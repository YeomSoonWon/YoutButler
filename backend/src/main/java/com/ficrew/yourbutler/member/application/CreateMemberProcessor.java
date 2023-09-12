package com.ficrew.yourbutler.member.application;

import com.ficrew.yourbutler.global.auth.JWTProvider;
import com.ficrew.yourbutler.global.auth.PasswordEncrypter;
import com.ficrew.yourbutler.member.application.command.CreateMemberCommand;
import com.ficrew.yourbutler.member.domain.entity.Member;
import com.ficrew.yourbutler.member.domain.exception.DuplicatedUserEmailException;
import com.ficrew.yourbutler.member.domain.exception.InconsistentEmailAndTokenException;
import com.ficrew.yourbutler.member.domain.repository.MemberRepository;
import com.ficrew.yourbutler.member.infrastructure.jwt.JwtMaker;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;

@RequiredArgsConstructor
public class CreateMemberProcessor {

    private final MemberRepository memberRepository;

    public void execute(CreateMemberCommand command, UserDetails user) {
        if (!command.getEmail().equals(user.getUsername())) {
            throw new InconsistentEmailAndTokenException();
        }

        Member member = memberRepository.findByEmail(command.getEmail());
        member.update(command);

        memberRepository.save(member);
    }
}
