package com.ficrew.yourbutler.user.presentation;

import com.ficrew.yourbutler.user.application.facade.UserFacade;
import com.ficrew.yourbutler.user.presentation.request.CreateUserRequest;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
public class UserController {

    private final UserFacade userFacade;

    @PostMapping("/signup")
    public ResponseEntity<String> signup(
        @RequestBody @Valid CreateUserRequest request
    ) {
        userFacade.createUser(request.toCommand());
        return new ResponseEntity<>("ok", HttpStatus.OK);
    }
}
