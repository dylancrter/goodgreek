package net.goodgreek.ggbackend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "event")
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user")
    private long id;

    @Column(name = "organization")
    private String organization;

    @Column(name = "eventName") 
    private String eventName;

    @Column(name = "price") 
    private String price;

    @Column(name = "venmo") 
    private String venmo;

    @Column(name = "benefits")
    private String benefits;

    @Column(name = "website")
    private String website;
}