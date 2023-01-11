package com.revature.Spoint;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan(basePackages = "com.revature")
@EnableJpaRepositories("com.revature.daos")
@EntityScan("com.revature")
public class SpointApplication {

	public static void main(String[] args) {

		SpringApplication.run(SpointApplication.class, args);
	}

}
