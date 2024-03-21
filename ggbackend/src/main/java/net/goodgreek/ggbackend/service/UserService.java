package net.goodgreek.ggbackend.service;

import java.security.SecureRandom;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import net.goodgreek.ggbackend.model.User;
import net.goodgreek.ggbackend.repository.UserRepository;


@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;
    
    public boolean updateProfileAbility(String email, String oldPassword) {
        User user = userRepository.findByUsername(email).orElseThrow(() -> new RuntimeException("User not found"));

        String storedPassword = user.getPassword();
        return passwordEncoder.matches(oldPassword, storedPassword);
    }

    public void updatePassword(String email, String newPassword) {
        User user = userRepository.findByUsername(email).orElseThrow(() -> new RuntimeException("User not found"));

        if (!newPassword.trim().isEmpty()) {
            String hashedPassword = passwordEncoder.encode(newPassword);

            user.setPassword(hashedPassword);
            userRepository.save(user);
        }
    }

    /* 
    public User updatePaymentInfo(String email, String cardNumber, String cardType, String cardExpirationDate) {
        User user = userRepository.findByUsername(email).orElseThrow(() -> new RuntimeException("User not found"));

        String hashedNumber = passwordEncoder.encode(cardNumber);
        String hashedType = passwordEncoder.encode(cardType);
        String hashedExpirationDate = passwordEncoder.encode(cardExpirationDate);

        user.setCardNumber(cardNumber);
        user.setCardType(cardType);
        user.setCardExpirationDate(cardExpirationDate);

        return userRepository.save(user);
    }
    */

    public User changeUserInfo(String email, String password, String name) {
        User user = userRepository.findByUsername(email).orElseThrow(() -> new RuntimeException("User not found"));

        if (!password.trim().isEmpty()) {
            String hashedPassword = passwordEncoder.encode(password);

            user.setPassword(hashedPassword);
        }
        user.setName(name);

        return userRepository.save(user);
    }

    public String forgotPassword(String email) {
        
        User user = userRepository.findByUsername(email).orElseThrow(() -> new RuntimeException("User not found"));

        String randomPassword = generateRandomPasscode();

        user.setPassword(passwordEncoder.encode(randomPassword));
        userRepository.save(user);

        return randomPassword;
    }

    private static String generateRandomPasscode() {
        // Generate a random passcode (e.g., 6 characters long)
        int passcodeLength = 6;
        StringBuilder sb = new StringBuilder();
        SecureRandom random = new SecureRandom();
        for (int i = 0; i < passcodeLength; i++) {
            // Generate a random character between '0' and '9'
            int digit = random.nextInt(10);
            sb.append(digit);
        }
        return sb.toString();
    }

}
