package com.ficrew.yourbutler.member.domain.exception;

import com.ficrew.yourbutler.global.exception.CustomBaseException;
import com.ficrew.yourbutler.global.exception.ErrorCode;

public class InconsistentEmailAndTokenException extends CustomBaseException {
    public InconsistentEmailAndTokenException(ErrorCode errorCode) {
        super(errorCode);
    }

    public InconsistentEmailAndTokenException() {
        super(ErrorCode.INCONSISTENCY_EMAIL);
    }
}
