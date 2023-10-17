package com.angularQuiz.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.angularQuiz.model.User;
import com.angularQuiz.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository userRepo;
	
	public void addUser(User user) {
		userRepo.save(user);
	}
	
	public List<User> viewAllUser(){
		return userRepo.findAll();
	}
	
	public Optional<User> findById(int id) {
		return userRepo.findById(id);
	}
	public User FindUser(String eamil, String password) {
		return userRepo.findByEmailAndPassword(eamil, password);
	}
	public User FindUserByEmail(String eamil) {
		return userRepo.findByEmail(eamil);
	}
	 public List<User> viewAllUserByScoreDesc() {
	        return userRepo.findAllByOrderByScoreDesc();
	    }
}
