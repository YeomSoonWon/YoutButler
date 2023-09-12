package com.ficrew.yourbutler.member.presentation.response;

import com.ficrew.yourbutler.global.auth.Token;
import lombok.Getter;

@Getter
public class SignInResponse {
    Token token;
    MemberResponse memberResponse;
    public SignInResponse(Token token, MemberResponse memberResponse) {
        this.token = token;
        this.memberResponse = memberResponse;
    }

    public boolean isActivated() {
        return this.memberResponse.age == null ? false : true;
    }
}
