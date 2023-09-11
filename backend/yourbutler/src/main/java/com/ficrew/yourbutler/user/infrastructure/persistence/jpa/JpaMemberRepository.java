package com.ficrew.yourbutler.user.infrastructure.persistence.jpa;

import com.ficrew.yourbutler.user.domain.entity.Member;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JpaMemberRepository extends JpaRepository<Member, Long> {

    Optional<Member> findByEmail(String email);

    boolean existsByEmail(String email);
}
