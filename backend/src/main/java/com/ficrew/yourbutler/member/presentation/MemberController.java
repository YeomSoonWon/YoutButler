package com.ficrew.yourbutler.member.presentation;

import com.ficrew.yourbutler.global.auth.AuthenticatedMember;
import com.ficrew.yourbutler.member.application.facade.MemberFacade;
import com.ficrew.yourbutler.member.presentation.request.CreateMemberRequest;
import com.ficrew.yourbutler.member.presentation.request.SignInRequest;
import com.ficrew.yourbutler.member.presentation.response.SignInResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

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
        @AuthenticationPrincipal AuthenticatedMember member
    ) {
        memberFacade.createMember(request.toCommand(), member);
        return new ResponseEntity<>("회원가입 완료", HttpStatus.OK);
    }
}
