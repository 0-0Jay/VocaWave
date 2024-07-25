package com.vocawave_back.vocawave.controller;

import com.vocawave_back.vocawave.dto.*;
import com.vocawave_back.vocawave.service.MainService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@RequestMapping("/main")
@RestController
public class MainController {
    private final MainService mainService;

    @GetMapping("/wordList/{id}")
    public Map<String, Object> getWordlist(@PathVariable("id") String id, @RequestParam("q") String query) {
        List<WordlistDto> res = mainService.search(new RequestSearch(id, query));
        Map<String, Object> response = new HashMap<>();
        response.put("wordlist", res);
        response.put("status", HttpStatus.OK);
        return response;
    }

    @PostMapping("/create")
    public Map<String, Object> createWordlist(@RequestBody RequestCreateList request) {
        Map<String, Object> response = new HashMap<>();
        mainService.createWordlist(request);
        response.put("status", HttpStatus.OK);
        return response;
    }
    @GetMapping("/delete/{code}")
    public Map<String, Object> deleteWordlist(@PathVariable("code") String code) {
        Map<String, Object> response = new HashMap<>();
        mainService.deleteWordlist(code);
        response.put("status", HttpStatus.OK);
        return response;
    }
    @PostMapping("/exam")
    public Map<String, Object> exam(@RequestBody RequestExam request) {
        Map<String, Object> response = new HashMap<>();
        mainService.exam(request);
        response.put("status", HttpStatus.OK);
        return response;
    }
    @GetMapping("/words/{code}")
    public Map<String, Object> getWords(@PathVariable("code") String code) {
        Map<String, Object> response = new HashMap<>();
        List<WordsDto> list = mainService.getWords(code);
        response.put("words", list);
        response.put("status", HttpStatus.OK);
        return response;
    }

    @PostMapping("/edit")
    public Map<String, Object> editWord(@RequestBody RequestWord request) {
        Map<String, Object> response = new HashMap<>();
        mainService.editWord(request);
        response.put("status", HttpStatus.OK);
        return response;
    }

    @PostMapping("/search")
    public Map<String, Object> search(@RequestBody RequestSearch request) {
        Map<String, Object> response = new HashMap<>();
        List<WordlistDto> list = mainService.search(request);
        response.put("status", HttpStatus.OK);
        response.put("wordlist", list);
        return response;
    }
}
