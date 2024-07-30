package com.vocawave_back.vocawave.service;

import com.vocawave_back.vocawave.dto.*;
import com.vocawave_back.vocawave.entity.Wordlist;
import com.vocawave_back.vocawave.entity.WordlistInterface;
import com.vocawave_back.vocawave.entity.Words;
import com.vocawave_back.vocawave.repository.WordlistRepository;
import com.vocawave_back.vocawave.repository.WordsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class MainService {
    private final WordlistRepository wordlistRepository;
    private final WordsRepository wordsRepository;
    public void createWordlist(RequestCreateList request) {
        String code = request.getId() + java.lang.System.currentTimeMillis();
        Wordlist wordlist = new Wordlist(code, request.getWtitle(), request.getCmt(), request.getId(), 0);
        wordlistRepository.save(wordlist);
    }

    public void deleteWordlist(String code) {
        System.out.println(code);
        wordlistRepository.deleteById(code);
    }

    public void exam(RequestExam request) {
        wordlistRepository.updateRate(request.getCode(), request.getRate());
    }

    public List<WordsDto> getWords(String code) {
        List<Words> list = wordsRepository.getWords(code);
        List<WordsDto> res = new ArrayList<>();
        for (Words w : list) res.add(WordsDto.toDto(w));
        return res;
    }

    public List<WordlistDto> search(RequestSearch request) {
        String query = "%" + request.getQuery() + "%";
        List<WordlistInterface> wordlist = wordlistRepository.searchWordlist(request.getId(), query);
        List<WordlistDto> res = new ArrayList<>();
        for (WordlistInterface w : wordlist) {
            res.add(
                    new WordlistDto(
                            w.getCode(),
                            w.getWtitle(),
                            w.getCmt(),
                            w.getCnt(),
                            w.getRate()
                    )
            );
        };
        return res;
    }

    public void editWord(RequestWord request) {
        int type = request.getType();
        System.out.println(request.getType());
        if (type == 0) {
            wordsRepository.deleteById(request.getWordcode());
        } else {
            Words words = RequestWord.toEntity(request);
            wordsRepository.save(words);
        }
    }

    public boolean addCode(RequestCode request) {
        List<Words> share = wordsRepository.getWords(request.getSharecode());
        if (!share.isEmpty()) {
            Set<String> mywords = new HashSet<>();
            List<Words> list = wordsRepository.getWords(request.getCode());
            for (Words w : list) {
                mywords.add(w.getWord());
            }
            for (Words w : share) {
                if (!mywords.contains(w.getWord())) {
                    String wordcode = "W" + java.lang.System.currentTimeMillis();
                    wordsRepository.save(new Words(wordcode, w.getWord(), w.getMean(), request.getCode()));
                }
            }
            return true;
        } else {
            return false;
        }
    }
}
