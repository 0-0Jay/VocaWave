package com.vocawave_back.vocawave.dto;

import com.vocawave_back.vocawave.entity.Users;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
    private String id;
    private String pw;
    private String nick;

    public static Users toEntity(UserDto userDto) {
        return new Users(
                userDto.getId(),
                userDto.getPw(),
                userDto.getNick()
        );
    }

    public static UserDto toDto(Users users) {
        return new UserDto(
                users.getId(),
                users.getPw(),
                users.getNick()
        );
    }
}
