package com.ficrew.yourbutler.user.domain.repository;

import com.ficrew.yourbutler.user.domain.entity.User;

public interface UserRepository {

    User save(User user);
    User findByEmail(String email);

    boolean existsByEmail(String email);
}
