package com.example.CCO.exceptions;

public class UserNotFoundException extends Exception {
    public UserNotFoundException(String email) {
        super("User with " + email + " email not found.");
    }
}