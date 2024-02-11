package net.goodgreek.ggbackend.repository;

import net.goodgreek.ggbackend.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {
    // all crud database methods
}