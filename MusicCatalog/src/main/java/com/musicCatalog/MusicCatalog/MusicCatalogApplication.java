package com.musicCatalog.MusicCatalog;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.musicCatalog.MusicCatalog.repositorys")
public class MusicCatalogApplication {

	public static void main(String[] args) {
		SpringApplication.run(MusicCatalogApplication.class, args);
	}

}
