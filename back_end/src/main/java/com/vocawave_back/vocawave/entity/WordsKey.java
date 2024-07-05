package com.vocawave_back.vocawave.entity;

import jakarta.persistence.Embeddable;
import lombok.*;

import java.io.Serializable;

@Embeddable
@Getter
@Setter
@NoArgsConstructor
@Builder
@AllArgsConstructor
public class WordsKey implements Serializable {
    private String word;
    private String code;
}
