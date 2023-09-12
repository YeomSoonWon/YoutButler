package com.ficrew.yourbutler.member.application;

import com.ficrew.yourbutler.member.application.command.SignInCommand;
import com.ficrew.yourbutler.member.application.result.SignInResult;
import com.ficrew.yourbutler.member.domain.exception.InvalidSocialTypeException;
import com.ficrew.yourbutler.member.presentation.request.SignInRequest;
import com.ficrew.yourbutler.member.presentation.response.SignInResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;

@RequiredArgsConstructor
public class SignInMemberProcessor {
    @Value("${oauth.kakao.id}")
    private String KAKAO_ID;

    @Value("${oauth.kakao.secret}")
    private String KAKAO_API_KEY;

    @Value("${oauth.google.id}")
    private String GOOGLE_ID;

    @Value("${oauth.google.secret}")
    private String GOOGLE_API_KEY;

    @Value("${oauth.naver.id}")
    private String NAVER_ID;

    @Value("${oauth.naver.secret}")
    private String NAVER_API_KEY;

    private class EmailAndNickname {
        String email, nickname;
    }
    public SignInResult execute(SignInCommand signInCommand) {
        EmailAndNickname emailAndNickname;

        switch (signInCommand.getSocialType()) {
            case "KAKAO":
                emailAndNickname = kakao_login(signInCommand);
                break;
            case "GOOGLE":
                emailAndNickname = google_login(signInCommand);
                break;
            case "NAVER":
                emailAndNickname = naver_login(signInCommand);
                break;
            default:
                throw new InvalidSocialTypeException();
        }

        return null;
    }

    private EmailAndNickname kakao_login(SignInCommand signInCommand) {
        return null;
    }
    private EmailAndNickname naver_login(SignInCommand signInCommand) {
        return null;
    }
    private EmailAndNickname google_login(SignInCommand signInCommand) {
        return null;
    }
}
