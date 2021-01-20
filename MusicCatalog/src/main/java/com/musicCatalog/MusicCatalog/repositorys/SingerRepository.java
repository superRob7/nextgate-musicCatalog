package com.musicCatalog.MusicCatalog.repositorys;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.musicCatalog.MusicCatalog.models.Singer;

@Repository
public interface SingerRepository extends JpaRepository<Singer, Long> {
 
	public List<Singer> findByName(String singerName);
	
}
