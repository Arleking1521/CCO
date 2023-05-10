package com.example.CCO.service.impl;

import com.example.CCO.dto.LoginDTO;
import com.example.CCO.dto.RegisterDTO;
import com.example.CCO.entity.User;
import com.example.CCO.exceptions.UserAlreadyExistsException;
import com.example.CCO.exceptions.UserNotFoundException;
import com.example.CCO.exceptions.WrongPasswordException;
import com.example.CCO.repository.UserRepository;
import com.example.CCO.security.Hasher;
import com.example.CCO.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;


    public void register(RegisterDTO authRequest) throws UserAlreadyExistsException {
        if (userRepository.existsByEmail(authRequest.getEmail())) {
            throw new UserAlreadyExistsException("Email is already in use.");
        }
        User user = new User(authRequest.getNickName(), authRequest.getEmail(), Hasher.encryptMD5(authRequest.getPassword()), "ROLE_PLAYER", 0L);
        userRepository.save(user);
    }

    public void login(LoginDTO authRequest) throws UserNotFoundException, WrongPasswordException {
        if (!userRepository.existsByEmail(authRequest.getEmail())) {
            throw new UserNotFoundException(authRequest.getEmail());
        }
        User entity = userRepository.findByEmail(authRequest.getEmail());
        if (!Hasher.encryptMD5(authRequest.getPassword()).equals(entity.getPassword())) {
            throw new WrongPasswordException(authRequest.getEmail());
        }
    }


}
