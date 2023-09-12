package com.ficrew.yourbutler.member.domain.entity;

public enum NumberOfHouses {
    NONE,
    ONE,
    TWO,
    MORE_THAN_TWO;

    public NumberOfHouses getEnum(String numberOfHouses) {
        if (numberOfHouses.contains("MORE_THAN_TWO")) {
            return MORE_THAN_TWO;
        } else if (numberOfHouses.contains("ONE")) {
            return ONE;
        } else if (numberOfHouses.contains("TWO")) {
            return TWO;
        } else {
            return NONE;
        }
    }
}
