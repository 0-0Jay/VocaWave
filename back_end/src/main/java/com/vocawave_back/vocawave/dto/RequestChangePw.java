package com.vocawave_back.vocawave.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@RequiredArgsConstructor
@AllArgsConstructor
public class RequestChangePw {
    private String id;
    private String pw;
    private String newpw;
}
