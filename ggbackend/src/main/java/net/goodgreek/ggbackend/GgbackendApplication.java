package net.goodgreek.ggbackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import net.goodgreek.ggbackend.repository.EventRepository;
import net.goodgreek.ggbackend.repository.TokenRepository;
import net.goodgreek.ggbackend.repository.UserRepository;

@SpringBootApplication
public class GgbackendApplication implements CommandLineRunner{

	public static void main(String[] args) { SpringApplication.run(GgbackendApplication.class, args); }

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private EventRepository eventRepository;

	@Autowired
	private TokenRepository tokenRepository;

	@Override
	public void run(String... args) throws Exception {
		tokenRepository.deleteAll();
		userRepository.deleteAll();
	}
}