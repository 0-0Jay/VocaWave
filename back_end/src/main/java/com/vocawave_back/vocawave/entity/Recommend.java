package com.vocawave_back.vocawave.entity;

import jakarta.persistence.Embeddable;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Recommend {
    @EmbeddedId
    private RecommendKey recommendKey;
}
