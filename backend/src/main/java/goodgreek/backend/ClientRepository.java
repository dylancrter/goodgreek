package goodgreek.backend;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {
    // JpaRepository provides basic CRUD operations and more
    // define custom query methods here as needed
}
