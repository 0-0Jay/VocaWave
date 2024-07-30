package com.vocawave_back.vocawave.dto;

import com.vocawave_back.vocawave.entity.Words;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@RequiredArgsConstructor
@AllArgsConstructor
public class RequestWord {
    private String wordcode;
    private String word;
    private String code;
    private String mean;
    private int type;  // 0:삭제, 1:수정, 2:추가

    public static Words toEntity(RequestWord word) {
        return new Words(
                (word.getWordcode() != null) ? word.getWordcode() : "W" + java.lang.System.currentTimeMillis(),
                word.getWord(),
                word.getMean(),
                word.getCode()
        );
    }
}
