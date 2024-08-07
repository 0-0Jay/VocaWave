package com.vocawave_back.vocawave.controller;

import com.vocawave_back.vocawave.dto.UserDto;
import com.vocawave_back.vocawave.dto.RequestChangePw;
import com.vocawave_back.vocawave.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RequiredArgsConstructor
@RequestMapping("/user")
@RestController
public class UserController {
    private final UserService userService;

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody UserDto userDto) {
        return userService.login(userDto);
    }

    @PostMapping("/signup")
    public Map<String, Object> signup(@RequestBody UserDto userDto) {
        Map<String, Object> response = new HashMap<>();
        boolean res = userService.signup(userDto);
        response.put("status", HttpStatus.OK);
        response.put("result", res);
        return response;
    }

    @PostMapping("/leave")
    public Map<String, Object> leave(@RequestBody UserDto userDto) {
        Map<String, Object> response = new HashMap<>();
        boolean result = userService.leave(userDto);
        response.put("result", result);
        response.put("status", HttpStatus.OK);
        return response;
    }

    @PostMapping("/changeNick")
    public Map<String, Object> changeNick(@RequestBody UserDto userDto) {
        Map<String, Object> response = new HashMap<>();
        boolean result = userService.changeNick(userDto);
        response.put("status", HttpStatus.OK);
        return response;
    }

    @PostMapping("/changePw")
    public Map<String, Object> changePw(@RequestBody RequestChangePw request) {
        Map<String, Object> response = new HashMap<>();
        boolean result = userService.changePw(request);
        response.put("result", result);
        response.put("status", HttpStatus.OK);
        return response;
    }
}
