package com.vocawave_back.vocawave.dto;

import com.vocawave_back.vocawave.entity.Shareboard;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@RequiredArgsConstructor
@AllArgsConstructor
public class ShareboardDto {
    private String code;
    private String stitle;
    private String contents;

    public static ShareboardDto toDto(Shareboard shareboard) {
        return new ShareboardDto(
                shareboard.getCode(),
                shareboard.getStitle(),
                shareboard.getContents()
        );
    }
}
