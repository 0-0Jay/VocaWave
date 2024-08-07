package com.vocawave_back.vocawave.service;

import com.vocawave_back.vocawave.dto.*;
import com.vocawave_back.vocawave.entity.Shareboard;
import com.vocawave_back.vocawave.entity.ShareboardInterface;
import com.vocawave_back.vocawave.entity.Wordlist;
import com.vocawave_back.vocawave.entity.Words;
import com.vocawave_back.vocawave.repository.RecommendRepository;
import com.vocawave_back.vocawave.repository.ShareboardRepository;
import com.vocawave_back.vocawave.repository.WordlistRepository;
import com.vocawave_back.vocawave.repository.WordsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ShareService {
    private final ShareboardRepository shareboardRepository;
    private final WordlistRepository wordlistRepository;
    private final WordsRepository wordsRepository;
    private final RecommendRepository recommendRepository;

    public List<WordsDto> getShareList(String code) {
        List<WordsDto> res = new ArrayList<>();
        List<Words> list = wordsRepository.getWords(code);
        for (Words w : list) {
            res.add(WordsDto.toDto(w));
        }
        return res;
    }

    public boolean updateShare(RequestShare request) {
        System.out.println(request.getCode() + "," + request.getNick());
        List<Shareboard> list = shareboardRepository.checkShare(request.getCode());
        if (list.isEmpty()) {
            shareboardRepository.save(RequestShare.toEntity(request));
            return true;
        }
        return false;
    }

    public void recommend(RecommendDto dto) {
        recommendRepository.save(RecommendDto.toEntity(dto));
    }

    public List<ShareboardDto> searchShare(String query) {
        List<ShareboardDto> res = new ArrayList<>();
        List<ShareboardInterface> list = shareboardRepository.searchShare("%" + query + "%");
        for (ShareboardInterface s : list) {
            res.add(ShareboardDto.toDto(s));
        }
        return res;
    }
}
