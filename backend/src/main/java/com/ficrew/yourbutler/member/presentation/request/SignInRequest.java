package com.ficrew.yourbutler.member.presentation.request;

import com.ficrew.yourbutler.member.application.command.SignInCommand;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

public class SignInRequest {
    @NotBlank
    @Pattern(regexp = "^(GOOGLE|NAVER|KAKAO)$", message = "소셜 타입이 올바르지 않습니다.")
    String socialType;

    @NotBlank(message = "토큰이 입력되지 않았습니다.")
    String token;

    public SignInCommand toCommand() {
        return new SignInCommand(
                socialType,
                token
        );
    }
}
