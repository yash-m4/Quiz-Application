package com.angularQuiz.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.angularQuiz.model.User;
@Repository
public interface UserRepository extends JpaRepository<User, Integer>{
	public User findByEmailAndPassword(String email,String password);
	public User findByEmail(String email);
	public List<User> findAllByOrderByScoreDesc();
}
