package net.goodgreek.ggbackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import net.goodgreek.ggbackend.controller.UserController;
import net.goodgreek.ggbackend.model.User;
import net.goodgreek.ggbackend.repository.EventRepository;
import net.goodgreek.ggbackend.model.Event;

@SpringBootApplication
public class GgbackendApplication implements CommandLineRunner{

	public static void main(String[] args) { SpringApplication.run(GgbackendApplication.class, args); }

	@Autowired
	private UserController userController;

	@Autowired
	private EventRepository eventRepository;

	@Override
	public void run(String... args) throws Exception {
		User user1 = new User();
		user1.setOrganization("Alpha Sigma Phi");
		user1.setEmail("dylancrter@hmail.com");
		user1.setName("Dylan Carter");
		user1.setPassword("DWCbaseball7$");
		userController.registerUser(user1);


		Event event = new Event();
		event.setOrganization("Alpha Sigma Phi");
		event.setEventName("Poop");
		event.setEventDescription("Event Description");
		event.setLocation("Athens, GA");
		event.setDate("Feb 11");
		event.setPrice("$20");
		event.setVenmo("@alphasig");
		event.setBenefits("Poopy");
		event.setWebsite("Poop@poopy.com");
		eventRepository.save(event);
	}
}