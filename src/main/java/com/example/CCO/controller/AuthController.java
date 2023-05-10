package com.example.CCO.controller;

import com.example.CCO.dto.LoginDTO;
import com.example.CCO.dto.RegisterDTO;
import com.example.CCO.exceptions.UserAlreadyExistsException;
import com.example.CCO.exceptions.UserNotFoundException;
import com.example.CCO.exceptions.WrongPasswordException;
import com.example.CCO.security.JwtUtils;
import com.example.CCO.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class AuthController {

    @Autowired
    private UserServiceImpl userService;


    @Autowired
    JwtUtils jwtUtils;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterDTO user) {
        try {
            userService.register(user);
            return ResponseEntity.ok(jwtUtils.generateToken(user.getEmail()));
        } catch (UserAlreadyExistsException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("An error occurred on the server");
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginDTO user) {
        try {
            userService.login(user);
            return ResponseEntity.ok(jwtUtils.generateToken(user.getEmail()));
        } catch (UserNotFoundException | WrongPasswordException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }


    @GetMapping("/check")
    public ResponseEntity<?> check(@RequestHeader(HttpHeaders.AUTHORIZATION) String auth) {
        String token = jwtUtils.restructJwtHeader(auth);
        if (token != null) {
            if (jwtUtils.validateToken(token)) {
                return ResponseEntity.ok(jwtUtils.generateToken(jwtUtils.getEmailFromToken(token)));
            }
        }
        return ResponseEntity.ok("LOGOUT");
    }


}
