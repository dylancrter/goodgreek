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
		user1.setEmail("ugaalphasig@gmail.com");
		user1.setName("Nubayat Ahmed");
		user1.setPassword("Nublikesballs");
		userController.registerUser(user1);


		Event event = new Event();
		event.setOrganization("Alpha Sigma Phi");
		event.setEventName("Boston Twea Party");
		event.setEventDescription("Getting Hammered");
		event.setLocation("Athens, GA");
		event.setDate("Feb 11");
		event.setPrice("$20");
		event.setVenmo("@alphasig");
		event.setBenefits("Donald Trump");
		event.setWebsite("donaldtrump.com");
		eventRepository.save(event);


	}
}