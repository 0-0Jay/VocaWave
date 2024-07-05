package com.vocawave_back.vocawave.dto;

import com.vocawave_back.vocawave.entity.Words;
import com.vocawave_back.vocawave.entity.WordsKey;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@RequiredArgsConstructor
@AllArgsConstructor
public class RequestWord {
    private String word;
    private String code;
    private String mean;
    private int type;  // 0:삭제, 1:수정, 2:추가

    public static Words toEntity(RequestWord word) {
        return new Words(
                new WordsKey(word.getWord(), word.getCode()),
                word.getMean()
        );
    }
}
