package com.ficrew.yourbutler.member.presentation;

import com.ficrew.yourbutler.global.auth.JWTProvider;
import com.ficrew.yourbutler.global.auth.Token;
import com.ficrew.yourbutler.member.application.facade.MemberFacade;
import com.ficrew.yourbutler.member.presentation.request.CreateMemberRequest;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import com.ficrew.yourbutler.member.presentation.request.SignInRequest;
import com.ficrew.yourbutler.member.presentation.response.SignInResponse;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.apache.tomcat.util.http.parser.Authorization;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.parameters.P;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/members")
@RequiredArgsConstructor
public class MemberController {

    private final MemberFacade memberFacade;

    @PostMapping("/signin")
    public ResponseEntity<SignInResponse> signin(
            @RequestBody @Valid SignInRequest signInRequest
    ) {
        SignInResponse signInResponse = memberFacade.signInMember(signInRequest.toCommand()).toResponse();
        return new ResponseEntity<>(signInResponse, signInResponse.isActivated() ? HttpStatus.OK : HttpStatus.ACCEPTED);
    }

    @PostMapping("/signup")
    public ResponseEntity<String> signup(
        @RequestBody @Valid CreateMemberRequest request,
        @AuthenticationPrincipal UserDetails user
    ) {
        memberFacade.createMember(request.toCommand(), user);
        return new ResponseEntity<>("회원가입 완료", HttpStatus.OK);
    }
}
