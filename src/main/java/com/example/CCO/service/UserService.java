package com.example.CCO.service;

import com.example.CCO.dto.UserDto;
import com.example.CCO.entity.User;

import java.util.List;

public interface UserService {
    void saveUser(UserDto userDto);

    User findByEmail(String email);

    List<UserDto> findAllUsers();
}
