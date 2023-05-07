package com.example.CCO.service;

import com.example.CCO.dto.UserDto;
import com.example.CCO.entity.User;
import com.example.CCO.exceptions.UserAlreadyExistsException;
import com.example.CCO.exceptions.UserNotFoundException;
import com.example.CCO.exceptions.WrongPasswordException;

import java.util.List;

public interface UserService {
    void register(UserDto authRequest) throws UserAlreadyExistsException;
    void login(UserDto authRequest) throws UserNotFoundException, WrongPasswordException;
}
