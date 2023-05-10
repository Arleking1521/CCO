package com.example.CCO.service;

import com.example.CCO.dto.LoginDTO;
import com.example.CCO.dto.RegisterDTO;
import com.example.CCO.exceptions.UserAlreadyExistsException;
import com.example.CCO.exceptions.UserNotFoundException;
import com.example.CCO.exceptions.WrongPasswordException;

public interface UserService {
    void register(RegisterDTO authRequest) throws UserAlreadyExistsException;
    void login(LoginDTO authRequest) throws UserNotFoundException, WrongPasswordException;
}
