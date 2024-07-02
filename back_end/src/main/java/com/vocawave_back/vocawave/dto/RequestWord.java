package com.vocawave_back.vocawave.dto;

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
    private String type;  // 0:삭제, 1:수정, 2:추가
}
