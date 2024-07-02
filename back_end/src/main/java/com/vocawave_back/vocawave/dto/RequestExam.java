package com.vocawave_back.vocawave.dto;

import lombok.Getter;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@RequiredArgsConstructor
public class RequestExam {
    private String code;
    private int rate;
}
