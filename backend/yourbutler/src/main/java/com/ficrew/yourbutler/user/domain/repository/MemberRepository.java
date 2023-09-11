package com.ficrew.yourbutler.user.domain.repository;

import com.ficrew.yourbutler.user.domain.entity.Member;

public interface MemberRepository {

    Member save(Member member);
    Member findByEmail(String email);

    boolean existsByEmail(String email);
}
