package com.vocawave_back.vocawave.dto;

import com.vocawave_back.vocawave.entity.Shareboard;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@RequiredArgsConstructor
public class RequestShare {
    private String code;
    private String nick;

    public static Shareboard toEntity(RequestShare request) {
        return new Shareboard(
                request.getCode(),
                request.getNick()
        );
    }
}
