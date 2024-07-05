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

    public boolean signup(UserDto userDto) {
        Optional<Users> user = usersRepository.findById(userDto.getId());
        if (user.isEmpty()) {
            usersRepository.save(UserDto.toEntity(userDto));
            return true;
        } else {
            return false;
        }
    }

    public void leave(UserDto userDto) {
        Optional<Users> user = usersRepository.findById(userDto.getId());
        if (user.isPresent() && userDto.getPw().equals(user.get().getPw())) {
            usersRepository.deleteById(userDto.getId());
        }
    }

    public boolean changeNick(UserDto userDto) {
        Optional<Users> user = usersRepository.findById(userDto.getId());
        Optional<Users> chk = usersRepository.findByNick(userDto.getNick());
        if (user.isPresent() && chk.isEmpty()) {
            Users res = new Users(
                    user.get().getId(),
                    user.get().getPw(),
                    userDto.getNick()
            );
            usersRepository.save(res);
            return true;
        } else {
            return false;
        }
    }
}
