package com.ficrew.yourbutler.Chat.infrastructure.persistence.jpa;

import com.ficrew.yourbutler.Chat.domain.entity.Bank;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JpaBankRepository extends JpaRepository<Bank, Long> {


}
