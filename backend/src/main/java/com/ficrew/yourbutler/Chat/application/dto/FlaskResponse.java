package com.ficrew.yourbutler.Chat.application.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class FlaskResponse {

    private String response;

    public FlaskResponse(String response) {
        this.response = response;
    }

}
