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

	}
}