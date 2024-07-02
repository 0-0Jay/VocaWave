package com.vocawave_back.vocawave.controller;

import com.vocawave_back.vocawave.dto.RequestCreateList;
import com.vocawave_back.vocawave.dto.RequestExam;
import com.vocawave_back.vocawave.dto.RequestSearch;
import com.vocawave_back.vocawave.dto.RequestWord;
import com.vocawave_back.vocawave.service.MainService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RequiredArgsConstructor
@RequestMapping("/main")
@RestController
public class MainController {
    private final MainService mainService;

    @PostMapping("/wordList")
    public Map<String, Object> getWordlist(@RequestBody String id) {
        Map<String, Object> response = new HashMap<>();
        return response;
    }

    @PostMapping("/create")
    public Map<String, Object> createWordlist(@RequestBody RequestCreateList request) {
        Map<String, Object> response = new HashMap<>();
        return response;
    }
    @PostMapping("/delete")
    public Map<String, Object> deleteWordlist(@RequestBody String code) {
        Map<String, Object> response = new HashMap<>();
        return response;
    }
    @PostMapping("/exam")
    public Map<String, Object> exam(@RequestBody RequestExam request) {
        Map<String, Object> response = new HashMap<>();
        return response;
    }
    @GetMapping("/words/{code}")
    public Map<String, Object> getWords(@PathVariable("code") String code) {
        Map<String, Object> response = new HashMap<>();
        return response;
    }

    @PostMapping("/edit")
    public Map<String, Object> editWord(@RequestBody RequestWord request) {
        Map<String, Object> response = new HashMap<>();
        return response;
    }

    @PostMapping("/search")
    public Map<String, Object> search(@RequestBody RequestSearch request) {
        Map<String, Object> response = new HashMap<>();
        return response;
    }
}
