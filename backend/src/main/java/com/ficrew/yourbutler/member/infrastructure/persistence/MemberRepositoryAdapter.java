package com.ficrew.yourbutler.member.infrastructure.persistence;

import com.ficrew.yourbutler.member.domain.entity.Member;
import com.ficrew.yourbutler.member.domain.repository.MemberRepository;
import com.ficrew.yourbutler.member.infrastructure.persistence.jpa.JpaMemberRepository;
import javax.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class MemberRepositoryAdapter implements MemberRepository {

    private final JpaMemberRepository userRepository;


    @Override
    public Member save(Member member) {
        return userRepository.save(member);
    }

    @Override
    public Member findByEmail(String email) {
        return this.userRepository.findByEmail(email)
            .orElseThrow(()-> new EntityNotFoundException("User Entity Not found."));
    }

    @Override
    public boolean existsByEmail(String email) {
        return userRepository.existsByEmail(email);
    }
}
