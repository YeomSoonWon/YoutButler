package com.ficrew.yourbutler.member.domain.repository;

import com.ficrew.yourbutler.member.domain.entity.Member;

public interface MemberRepository {

    Member save(Member member);
    Member findByEmail(String email);

    boolean existsByEmail(String email);
}
