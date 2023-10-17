package com.angularQuiz.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.angularQuiz.model.User;
import com.angularQuiz.service.UserService;

import jakarta.servlet.http.HttpServletRequest;


@RestController
@CrossOrigin("*")
public class Controller {

	@Autowired
	UserService userService;
	HashMap<String, Object> res=new HashMap<>();
	
	@PostMapping("/addUser")
	public ResponseEntity<HashMap<String, Object>> addUser(@RequestParam("name") String name,
	        @RequestParam("password") String password,
	        @RequestParam("email") String email) {
	    
	    res.clear();
	    System.out.println(name);
	    System.out.println(email);
	    System.out.println(password);
	    
	    List<User> users = userService.viewAllUser();
	    
	    for (User u : users) {
	        if (u.getEmail().equals(email)) {
	            res.put("status", HttpStatus.BAD_REQUEST.value());
	            res.put("message", "Email already Exists");
	            return new ResponseEntity<>(res, HttpStatus.BAD_REQUEST);
	        }
	    }
	    
	    User user = new User();
	    user.setPassword(password);
	    user.setName(name);
	    user.setScore(0);
	    user.setEmail(email);
	    System.out.println(user.getEmail());

	    userService.addUser(user);

	    res.put("status", HttpStatus.OK.value());
	    res.put("message", "User Created Successfully");
	    return new ResponseEntity<>(res, HttpStatus.OK);
	}

	
	@PostMapping("/login")
	public ResponseEntity<Map<String, Object>> validateUser(HttpServletRequest request,@RequestParam("email") String email,
			@RequestParam("password") String password){
		User user=userService.FindUser(email, password);
		if(user!=null) {
			  Map<String, Object> response = new HashMap<>();
		        response.put("isValid", true);
			
			 return ResponseEntity.ok(response);
		}
		else 
		{
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
		}
	}
	
	
	@PostMapping("/user")
	public ResponseEntity<User> findUSer(
	        @RequestParam("email") String email) {
		System.out.println("oooooooooooo");
	    System.out.println(email);
	    User users = userService.FindUserByEmail(email);
	    System.out.println(users.getName());
	    return ResponseEntity.status(HttpStatus.OK).body(users);
	}
	
	@PostMapping("/updateScore")
	public void updateScore(
	        @RequestParam("email") String email, @RequestParam("score") String score) {
		System.out.println("oooooooooooo");
	    System.out.println(email);
	    User users = userService.FindUserByEmail(email);
	    
	    users.setScore(Integer.parseInt(score));
	    System.out.println(users.getScore());
	    userService.addUser(users);
	}
	
	
	@GetMapping("/allUser")
	public ResponseEntity<List<User>> allUser() {
		
		 List<User> users = userService.viewAllUserByScoreDesc();
	    return ResponseEntity.status(HttpStatus.OK).body(users);
	}
	
}
