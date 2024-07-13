package com.vocawave_back.vocawave.dto;

import com.vocawave_back.vocawave.entity.Recommend;
import com.vocawave_back.vocawave.entity.RecommendKey;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@RequiredArgsConstructor
public class RecommendDto {
    private String code;
    private String id;

    public static Recommend toEntity(RecommendDto dto) {
        return new Recommend(
                new RecommendKey(
                        dto.getId(),
                        dto.getCode()
                )
        );
    }
}
