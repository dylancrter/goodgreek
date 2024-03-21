package net.goodgreek.ggbackend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {

    @Getter
    @Setter
    private String token;

    @Getter
    @Setter
    private String message;
    
}
