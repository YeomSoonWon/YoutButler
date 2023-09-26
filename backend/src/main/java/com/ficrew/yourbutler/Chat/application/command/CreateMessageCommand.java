package com.ficrew.yourbutler.Chat.application.command;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class CreateMessageCommand {

    private Long chatRoomNo;
    private Long aptNo;
    private Boolean isBot;
    private String message;

}
