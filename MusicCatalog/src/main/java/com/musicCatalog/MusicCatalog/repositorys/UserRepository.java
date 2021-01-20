package com.musicCatalog.MusicCatalog.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;

import com.musicCatalog.MusicCatalog.security.User;


public interface UserRepository extends JpaRepository<User, Long> {

	User findByUserName(String userName);
	
}
