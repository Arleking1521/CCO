package com.example.CCO.repository;

import com.example.CCO.entity.Level;
import org.springframework.data.jpa.repository.JpaRepository;

import java.math.BigInteger;

public interface LevelRepository extends JpaRepository<Level, Long> {
    Level findById(BigInteger id);
}
