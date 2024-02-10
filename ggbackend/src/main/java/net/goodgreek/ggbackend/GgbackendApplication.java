package net.goodgreek.ggbackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import net.goodgreek.ggbackend.repository.UserRepository;
import net.goodgreek.ggbackend.model.User;

@SpringBootApplication
public class GgbackendApplication implements CommandLineRunner{

	public static void main(String[] args) { SpringApplication.run(GgbackendApplication.class, args); }

	@Autowired
	private UserRepository userRepository;

	@Override
	public void run(String... args) throws Exception {
		User user = new User();
		user.setOrganization("Alpha Sigma Phi");
		user.setEmail("dylanc.rter@gmail.com");
		user.setName("Dylan Carter");
		user.setPassword("DWCbaseball7$");
		userRepository.save(user);
	}

}