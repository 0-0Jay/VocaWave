package com.vocawave_back.vocawave.entity;

import jakarta.persistence.Embeddable;
import lombok.*;

@Embeddable
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RecommendKey {
    private String id;
    private String code;
}
