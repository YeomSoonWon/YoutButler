package com.ficrew.yourbutler.Chat.presentation.request;

import com.ficrew.yourbutler.Chat.application.command.CreateMessageCommand;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class CreateMessageRequest {

    @Min(value = 0, message = "채팅방 번호가 필요합니다.")
    private Long chatRoomNo;

    @NotBlank(message = "채팅 내용이 필요합니다.")
    private String chat;

    @Min(0)
    private Long aptNo;

    public CreateMessageCommand toCommand() {
        return new CreateMessageCommand(chatRoomNo, aptNo, false, chat);
    }

}
