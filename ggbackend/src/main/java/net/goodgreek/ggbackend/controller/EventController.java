package net.goodgreek.ggbackend.controller;

import net.goodgreek.ggbackend.exception.ResourceNotFoundException;
import net.goodgreek.ggbackend.model.Event;
import net.goodgreek.ggbackend.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;

@RestController
@RequestMapping("/api/event")
public class EventController {
    
    @Autowired
    private EventRepository eventRepository;

    @GetMapping
    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    //Mapping for getting by id
    @GetMapping("/{id}")
    public ResponseEntity<Event> getEventbyId(@PathVariable Long id) {
        Event user = eventRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Event not found with id: " + id));
        return ResponseEntity.ok(user);
    }

    @DeleteMapping("/all")
    public void deleteAllEvents() {
        eventRepository.deleteAll();
        return;
    }

    @PostMapping("/events")
    public ResponseEntity<String> createEvent(@NonNull @RequestBody Event event) {
        // Save the event to the database
        @SuppressWarnings("unused")
        Event savedEvent = eventRepository.save(event);
        
        return ResponseEntity.status(HttpStatus.CREATED).body("Event created successfully");
    }

}