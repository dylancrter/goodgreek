package net.goodgreek.ggbackend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // Allows CORS requests for all endpoints
                .allowedOrigins("http://localhost:3000") // Allows requests from your React app's origin
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Allows specified methods
                .allowedHeaders("*") // Allows all headers
                .allowCredentials(true); // Allows credentials
    }
}