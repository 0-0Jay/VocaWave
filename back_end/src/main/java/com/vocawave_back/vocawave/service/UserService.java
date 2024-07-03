package com.vocawave_back.vocawave.service;

import com.vocawave_back.vocawave.dto.UserDto;
import com.vocawave_back.vocawave.entity.Users;
import com.vocawave_back.vocawave.repository.UsersRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UsersRepository usersRepository;

    public Map<String, Object> login(UserDto userDto) {
        Optional<Users> user = usersRepository.findByIdAndPw(userDto.getId(), userDto.getPw());
        Map<String, Object> res = new HashMap<>();
        if (user.isEmpty()) {
            res.put("status", false);
        } else {
            res.put("status", true);
            res.put("id", user.get().getId());
            res.put("nick", user.get().getNick());
        }
        return res;
    }
}
