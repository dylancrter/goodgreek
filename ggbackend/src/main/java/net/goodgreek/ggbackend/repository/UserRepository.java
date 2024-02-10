package net.goodgreek.ggbackend.repository;

import net.goodgreek.ggbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // all crud database methods
}
