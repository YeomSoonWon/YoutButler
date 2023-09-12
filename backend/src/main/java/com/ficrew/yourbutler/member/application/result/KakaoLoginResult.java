package com.ficrew.yourbutler.member.application.result;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.Getter;

@Getter
@JsonIgnoreProperties(ignoreUnknown = true)
public class KakaoLoginResult {
    @JsonProperty("properties")
    private Properties properties;

    @JsonProperty("kakao_account")
    private KakaoAccount kakaoAccount;

    public Properties getProperties() {
        return properties;
    }

    public KakaoAccount getKakaoAccount() {
        return kakaoAccount;
    }

    @Getter
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class Properties {
        private String nickname;
        public String getNickname() {
            return nickname;
        }
    }

    @Getter
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class KakaoAccount {
        private String email;
        public String getEmail() {
            return email;
        }
    }
}
