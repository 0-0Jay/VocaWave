package com.vocawave_back.vocawave.dto;

import com.vocawave_back.vocawave.entity.Shareboard;
import com.vocawave_back.vocawave.entity.ShareboardInterface;
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
    private int cnt;
    private String nick;

    public static ShareboardDto toDto(ShareboardInterface shareboard) {
        return new ShareboardDto(
                shareboard.getCode(),
                shareboard.getWtitle(),
                shareboard.getCmt(),
                shareboard.getCnt(),
                shareboard.getNick()
        );
    }
}
