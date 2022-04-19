package com.ceub.super10.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ceub.super10.entity.User;

public interface UserRepository extends JpaRepository<User, Long>{

	User findByEmail(String email);
}
