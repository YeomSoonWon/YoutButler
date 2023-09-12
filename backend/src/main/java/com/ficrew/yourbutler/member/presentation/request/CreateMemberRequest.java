package com.ficrew.yourbutler.member.presentation.request;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ficrew.yourbutler.member.application.command.CreateMemberCommand;

import javax.validation.constraints.*;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import reactor.util.annotation.Nullable;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class CreateMemberRequest {

    @NotBlank(message = "이메일을 입력해주세요.")
    @Email(message = "이메일 형식에 맞춰 주세요.")
    private String email;

    @NotBlank(message = "닉네임을 입력해주세요.")
    private String nickname;

    @Max(value = 200, message = "나이를 확인해주세요.")
    private Integer age;

    @Nullable
    private Integer holdingAsset;

    @Nullable
    @Max(value = 1000, message = "신용도는 1000을 넘을 수 없습니다.")
    private Integer creditRating;

    @Nullable
    private Long monthlyAvailableAsset;

    @Nullable
    @Pattern(regexp = "^(NONE|ONE|TWO|MORE_THAN_TWO)$", message = "주택 수에 올바른 값을 입력해주세요")
    private String numberOfHouses;

    public CreateMemberCommand toCommand() {
        return new CreateMemberCommand(email, nickname);
    }
}
