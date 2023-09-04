package com.ficrew.yourbutler.user.infrastructure.persistence;

import com.ficrew.yourbutler.user.domain.entity.User;
import com.ficrew.yourbutler.user.domain.repository.UserRepository;
import com.ficrew.yourbutler.user.infrastructure.persistence.jpa.JpaUserRepository;
import javax.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class UserRepositoryAdapter implements UserRepository {

    private final JpaUserRepository userRepository;


    @Override
    public User save(User user) {
        return userRepository.save(user);
    }

    @Override
    public User findByEmail(String email) {
        return this.userRepository.findByEmail(email)
            .orElseThrow(()-> new EntityNotFoundException("User Entity Not found."));
    }

    @Override
    public boolean existsByEmail(String email) {
        return userRepository.existsByEmail(email);
    }
}
