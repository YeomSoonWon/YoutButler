package com.ficrew.yourbutler.Chat.application.result;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class FlaskResult {

    // output parser로 구조화가 되면 이 부분을 수정해야 함
    private String response;

    public FlaskResult(String response) {
        this.response = response;
    }

}
