package net.goodgreek.ggbackend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "event")
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "organization")
    private String organization;

    @Column(name = "eventName") 
    private String eventName;

    @Column(name = "eventDescription")
    private String eventDescription;

    @Column(name = "location")
    private String location;

    @Column(name = "date")
    private String date;

    @Column(name = "price") 
    private String price;

    @Column(name = "venmo") 
    private String venmo;

    @Column(name = "benefits")
    private String benefits;

    @Column(name = "website")
    private String website;

    @Column(name = "image")
    private int image;
}