package com.vocawave_back.vocawave.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Wordlist {
    @Id
    private String code;
    private String wtitle;
    private String cmt;
    private String id;
    private int rate;
}
