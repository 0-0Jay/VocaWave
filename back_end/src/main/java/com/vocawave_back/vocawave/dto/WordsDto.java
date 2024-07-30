package com.vocawave_back.vocawave.dto;

import com.vocawave_back.vocawave.entity.Words;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@RequiredArgsConstructor
public class WordsDto {
    private String wordcode;
    private String word;
    private String mean;

    public static WordsDto toDto(Words words) {
        return new WordsDto(
                words.getWordcode(),
                words.getWord(),
                words.getMean()
        );
    }
}
