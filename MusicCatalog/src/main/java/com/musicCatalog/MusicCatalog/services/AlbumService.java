package com.musicCatalog.MusicCatalog.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.musicCatalog.MusicCatalog.models.Album;
import com.musicCatalog.MusicCatalog.repositorys.AlbumRepository;


@Service
@Transactional
public class AlbumService {

	@Autowired
	private AlbumRepository albumRepo;

	public List<Album> listAll() {
		return albumRepo.findAll();
	}
	
	public List<Album> findAlbumByAlbumName(String albumName){
		return albumRepo.findByAlbumName(albumName);
	}

	public List<Album> findBySingerId(long singerId){
		return albumRepo.findBySingerId(singerId);
	}
	
	public List<Album> findBySingerName(String singerName){
		return albumRepo.findBySingerName(singerName);
	}
	
	public void save(Album album) {
		albumRepo.save(album);
	}

	public Album get(long id) {
		return albumRepo.findById(id).get();
	}

	public void delete(long id) {
		albumRepo.deleteById(id);
	}

}
