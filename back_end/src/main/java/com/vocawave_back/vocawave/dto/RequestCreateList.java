package com.vocawave_back.vocawave.dto;

import com.vocawave_back.vocawave.entity.Wordlist;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@RequiredArgsConstructor
public class RequestCreateList {
    private String id;
    private String wtitle;
    private String cmt;
}
