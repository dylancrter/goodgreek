package net.goodgreek.ggbackend.model;

import lombok.Getter;
import lombok.Setter;

public class Email {
    
    @Getter
    @Setter
    private String recipient;

    @Getter
    @Setter
    private String subject;

    @Getter
    @Setter
    private String message;
}
