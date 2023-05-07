package com.example.CCO.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="users")
public class User
{
    private static final long serialVersionUID = 1L;

    @Id
    @SequenceGenerator(name = "user_id_sequense", sequenceName = "user_id_sequense", initialValue = 1, allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_id_sequense")
    @Column(name = "id", columnDefinition = "serial primary key")
    private Long id;

    @Column(nullable=false)
    private String name;

    @Column(nullable=false, unique=true)
    private String email;

    @Column(nullable=false)
    private String password;

    @Column(nullable=false)
    private String role;

    @Column(name = "exp")
    private Long exp;


    public User(String name, String email, String password, String role, Long exp) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
        this.exp = exp;
    }
}
