package net.goodgreek.ggbackend.controller;

import net.goodgreek.ggbackend.exception.ResourceNotFoundException;
import net.goodgreek.ggbackend.model.User;
import net.goodgreek.ggbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserController {
    
    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    //Mapping for getting by id
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserbyId(@PathVariable Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Movie not found with id: " + id));
        return ResponseEntity.ok(user);
    }

    @DeleteMapping("/all")
    public void deleteAllShowings() {
        userRepository.deleteAll();
        return;
    }
}
