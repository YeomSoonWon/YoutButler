package com.ficrew.yourbutler.member.application;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ficrew.yourbutler.global.auth.JWTProvider;
import com.ficrew.yourbutler.global.auth.PasswordEncrypter;
import com.ficrew.yourbutler.global.auth.Token;
import com.ficrew.yourbutler.member.application.command.SignInCommand;
import com.ficrew.yourbutler.member.application.result.KakaoLoginResult;
import com.ficrew.yourbutler.member.application.result.SignInResult;
import com.ficrew.yourbutler.member.domain.entity.Member;
import com.ficrew.yourbutler.member.domain.exception.InvalidSocialTypeException;
import com.ficrew.yourbutler.member.domain.repository.MemberRepository;
import com.ficrew.yourbutler.member.presentation.response.MemberResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.orm.jpa.JpaObjectRetrievalFailureException;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

@RequiredArgsConstructor
public class SignInMemberProcessor {
    private final MemberRepository memberRepository;
    private final PasswordEncrypter passwordEncrypter;
    private final JWTProvider jwtProvider;

    @Transactional
    public SignInResult execute(SignInCommand signInCommand) {
        EmailAndNickname emailAndNickname;

        switch (signInCommand.getSocialType()) {
            case "KAKAO":
                emailAndNickname = kakao_login(signInCommand.getToken());
                break;
            case "GOOGLE":
                emailAndNickname = google_login(signInCommand.getToken());
                break;
            case "NAVER":
                emailAndNickname = naver_login(signInCommand.getToken());
                break;
            default:
                throw new InvalidSocialTypeException();
        }

        Member member;

        try {
            member = memberRepository.findBySocialTypeAndIdentifier(signInCommand.getSocialType(), emailAndNickname.identifier);
        } catch (JpaObjectRetrievalFailureException e) {
            member = new Member(
                            emailAndNickname.identifier,
                            signInCommand.getSocialType(),
                            emailAndNickname.email,
                            emailAndNickname.nickname,
                            passwordEncrypter.encrypt(emailAndNickname.identifier));

            memberRepository.save(member);
        }

        Token token = jwtProvider.generateTokens(
                member.getSocialType() + " " + member.getIdentifier(),
                member.getIdentifier()
        );

        token.removeRefresh();

        MemberResponse memberResponse = new MemberResponse(member);

        return new SignInResult(token, memberResponse);
    }

    private EmailAndNickname kakao_login(String token) {
        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add("Authorization", "Bearer " + token);
        httpHeaders.add("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");

        HttpEntity<MultiValueMap<String, String>> kakaoProfileRequest = new HttpEntity<>(httpHeaders);

        ResponseEntity<String> response = restTemplate.exchange(
                "https://kapi.kakao.com/v2/user/me",
                HttpMethod.POST,
                kakaoProfileRequest,
                String.class
        );

        ObjectMapper objectMapper = new ObjectMapper();
        KakaoLoginResult kakaoLoginResult;
        try {
            kakaoLoginResult = objectMapper.readValue(response.getBody(), KakaoLoginResult.class);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }

        return new EmailAndNickname(
                kakaoLoginResult.getKakaoAccount().getEmail(),
                kakaoLoginResult.getKakaoAccount().getEmail(),
                kakaoLoginResult.getProperties().getNickname()
        );
    }
    private EmailAndNickname naver_login(String token) {
        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add("Authorization", "Bearer " + token);
        httpHeaders.add("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");

        HttpEntity<MultiValueMap<String, String>> kakaoProfileRequest = new HttpEntity<>(httpHeaders);

        ResponseEntity<String> response = restTemplate.exchange(
                "https://kapi.kakao.com/v2/user/me",
                HttpMethod.POST,
                kakaoProfileRequest,
                String.class
        );

        return null;
    }
    private EmailAndNickname google_login(String token) {
        return null;
    }

    private class EmailAndNickname {
        String identifier, email, nickname;
        public EmailAndNickname(String identifier, String email, String nickname) {
            this.identifier = identifier;
            this.email = email;
            this.nickname = nickname;
        }
    }
}
