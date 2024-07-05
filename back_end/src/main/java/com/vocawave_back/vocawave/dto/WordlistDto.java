package com.vocawave_back.vocawave.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@RequiredArgsConstructor
public class WordlistDto {
    private String code;
    private String wtitle;
    private String cmt;
    private int cnt;
    private int rate;
}
