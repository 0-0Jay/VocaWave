package com.vocawave_back.vocawave.controller;

import com.vocawave_back.vocawave.dto.RecommendDto;
import com.vocawave_back.vocawave.dto.RequestShare;
import com.vocawave_back.vocawave.service.MainService;
import com.vocawave_back.vocawave.service.ShareService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RequiredArgsConstructor
@RequestMapping("/share")
@RestController
public class ShareController {
    private final MainService mainService;
    private final ShareService shareService;

    @GetMapping("/board")
    public Map<String, Object> getShareboard() {
        Map<String, Object> response = new HashMap<>();
        response.put("wordlist", shareService.getShareboard());
        response.put("status", HttpStatus.OK);
        return response;
    }

    @GetMapping("/code/{code}")
    public Map<String, Object> getShareList(@PathVariable("code") String code) {
        Map<String, Object> response = new HashMap<>();
        response.put("words", shareService.getShareList(code));
        response.put("status", HttpStatus.OK);
        return response;
    }

    @PostMapping("/update")
    public Map<String, Object> updateShare(@RequestBody RequestShare request) {
        Map<String, Object> response = new HashMap<>();
        response.put("status", HttpStatus.OK);
        response.put("result", shareService.updateShare(request));
        return response;
    }

    @PostMapping("/recommend")
    public Map<String, Object> recommend(@RequestBody RecommendDto dto) {
        Map<String, Object> response = new HashMap<>();
        shareService.recommend(dto);
        response.put("status", HttpStatus.OK);
        return response;
    }

    @GetMapping("/search")
    public Map<String, Object> searchShare(@RequestParam("q") String query) {
        Map<String, Object> response = new HashMap<>();
        response.put("wordlist", shareService.searchShare(query));
        response.put("status", HttpStatus.OK);
        return response;
    }
}
