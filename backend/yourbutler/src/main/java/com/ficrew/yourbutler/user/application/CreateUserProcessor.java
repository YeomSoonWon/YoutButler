package com.ficrew.yourbutler.user.application;

import com.ficrew.yourbutler.global.auth.PasswordEncrypter;
import com.ficrew.yourbutler.user.application.command.CreateUserCommand;
import com.ficrew.yourbutler.user.domain.exception.DuplicatedUserEmailException;
import com.ficrew.yourbutler.user.domain.repository.UserRepository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class CreateUserProcessor {

    private final UserRepository userRepository;
    private final PasswordEncrypter passwordEncrypter;

    public void execute(CreateUserCommand command) {
        if (userRepository.existsByEmail(command.getEmail())) {
            throw new DuplicatedUserEmailException();
        }

        String encryptedPassword = passwordEncrypter.encrypt(command.getPassword());
        userRepository.save(command.toEntity(encryptedPassword));
    }
}
