package net.goodgreek.ggbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import net.goodgreek.ggbackend.exception.ResourceNotFoundException;
import net.goodgreek.ggbackend.model.User;
import net.goodgreek.ggbackend.repository.UserRepository;
import net.goodgreek.ggbackend.service.TokenService;
import net.goodgreek.ggbackend.service.UserService;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "https://localhost:3000")
public class UserController {
    
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private TokenService tokenService;

    // add user mapping
    @PostMapping
    public User createUser(@RequestBody User user) {
        User user1 = userRepository.save(user);
        return user1;
    }

    // mapping for getting all users
    @GetMapping
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // mapping for getting by id
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserbyId(@PathVariable Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + id));
        return ResponseEntity.ok(user);
    }

    // mapping for deleting all users
    @DeleteMapping("/all")
    public void deleteAllUsers() {
        userRepository.deleteAll();
        return;
    }

    @PostMapping("/editProfileAccess")
    public ResponseEntity<Boolean> editProfileAccess(@RequestBody Map<String, String> request) {
        return ResponseEntity.ok(userService.updateProfileAbility(request.get("email"), request.get("password")));
    }

    /*
    @PutMapping("/editProfile")
    public void editProfile(@RequestBody Map<String, String> request) {
        userService.updatePassword(request.get("email"), request.get("password"));
        userService.changeUserInfo(request.get("email"), request.get("password"), request.get("firstName"), request.get("lastName"), 
                                    request.get("billingStreet"), request.get("billingCity"), request.get("billingState"), request.get("billingZipCode"));
        userService.updatePaymentInfo(request.get("email"), request.get("cardNumber"), request.get("cardType"), request.get("cardExpirationDate"));
    }
    */

    @PutMapping("/forgotPassword")
    public ResponseEntity<String> forgotPasword(@RequestBody Map<String, String> request) {
        return ResponseEntity.ok(userService.forgotPassword(request.get("email")));
    }

    /* 
    @PostMapping ("/getUser")
    public ResponseEntity<User> getUserByToken(@RequestBody Map<String, String> requestBody) {
        String token = requestBody.get("token");

        boolean isTokenActive = tokenService.isTokenActive(token);
        if (!isTokenActive) {
            System.out.println("Token is invalid or has been logged out.");
            return ResponseEntity.badRequest().body(null);
        }

        User user = tokenService.getUserDataFromToken(token);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    */

    @PostMapping ("/getUser")
    public ResponseEntity<User> getUserByToken(@RequestBody Map<String, String> requestBody) {
        String token = requestBody.get("token");

        boolean isTokenActive = tokenService.isTokenActive(token);
        if (!isTokenActive) {
            System.out.println("Token is invalid or has been logged out.");
            return ResponseEntity.badRequest().body(null);
        }

        User user = tokenService.getUserDataFromToken(token);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
