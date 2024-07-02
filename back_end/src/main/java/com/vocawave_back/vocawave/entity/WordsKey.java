package com.vocawave_back.vocawave.entity;

import jakarta.persistence.Embeddable;
import lombok.*;

@Embeddable
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class WordsKey {
    private String word;
    private String code;
}
