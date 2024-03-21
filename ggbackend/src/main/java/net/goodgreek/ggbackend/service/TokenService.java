package net.goodgreek.ggbackend.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.goodgreek.ggbackend.model.Token;
import net.goodgreek.ggbackend.model.User;
import net.goodgreek.ggbackend.repository.TokenRepository;

@Service
public class TokenService {
    
    @Autowired
    private TokenRepository tokenRepository;

    public boolean isTokenActive(String token) {
        return tokenRepository.findByToken(token)
                .map(Token::isLoggedOut)
                .map(isLoggedOut -> !isLoggedOut)
                .orElse(false);
    }

    public User getUserDataFromToken(String token) {
        Optional<Token> optionalToken = tokenRepository.findByToken(token);
        if (optionalToken.isPresent()) {
            Token tokenEntity = optionalToken.get();
            if (!tokenEntity.isLoggedOut()) {
                return tokenEntity.getUser();
            }
        }
        return null;
    }
    
}
