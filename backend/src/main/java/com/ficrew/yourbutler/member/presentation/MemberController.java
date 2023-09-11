package com.ficrew.yourbutler.member.presentation;

import com.ficrew.yourbutler.global.auth.JWTProvider;
import com.ficrew.yourbutler.global.auth.Token;
import com.ficrew.yourbutler.member.application.facade.MemberFacade;
import com.ficrew.yourbutler.member.presentation.request.CreateMemberRequest;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
public class MemberController {

    private final MemberFacade memberFacade;

    @PostMapping("/signup")
    public ResponseEntity<String> signup(
        @RequestBody @Valid CreateMemberRequest request
    ) {
        memberFacade.createUser(request.toCommand());
        return new ResponseEntity<>("ok", HttpStatus.OK);
    }

    private final JWTProvider jwtProvider;
    private final PasswordEncoder passwordEncoder;
    @GetMapping("/test")
    public ResponseEntity<Token> signin(
            @RequestBody @Valid CreateMemberRequest request
    ) {
        System.out.println(passwordEncoder.encode(request.getPassword()));
        return new ResponseEntity<>(jwtProvider.generateTokens(request.getEmail(), request.getPassword()), HttpStatus.OK);
    }
}
