package com.musicCatalog.MusicCatalog.repositorys;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.musicCatalog.MusicCatalog.models.Album;


public interface AlbumRepository  extends JpaRepository<Album, Long> {

	public List<Album> findByAlbumName(String albumName);
	
	public List<Album> findBySingerId(long singerId);
	
	public List<Album> findBySingerName(String singerName);
	
	
}
