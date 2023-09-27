package com.ficrew.yourbutler.Chat.presentation.response;

import com.ficrew.yourbutler.Chat.application.result.MessageResult;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class MessageResponse {

    private final Boolean isBot;
    private final LocalDateTime timeStamp;
    private final String message;
    private Loan loan;
    private Bank bank;

    public MessageResponse(MessageResult messageResult) {
        this.isBot = messageResult.getIsBot();
        this.timeStamp = messageResult.getTimeStamp();
        this.message = messageResult.getMessage();

        if (messageResult.getLoanName() != null) {
            this.loan = new Loan(messageResult.getLoanName(), messageResult.getLoanInterest());
        }

        if (messageResult.getBankName() != null) {
            this.bank = new Bank(messageResult.getBankName(), messageResult.getBankTel(), messageResult.getBankSite());
        }
    }

    @Data
    @AllArgsConstructor
    public static class Loan {
        private String loanName;
        private Double loanInterest;
    }

    @Data
    @AllArgsConstructor
    public static class Bank {
        private String bankName;
        private String bankTel;
        private String bankSite;
    }

}
