package com.musicCatalog.MusicCatalog.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.musicCatalog.MusicCatalog.models.Singer;
import com.musicCatalog.MusicCatalog.repositorys.SingerRepository;



@Service
public class SingerService {

	@Autowired
	private SingerRepository singerRepo;

	public List<Singer> listAll() {
		return singerRepo.findAll();
	}

	public void save(Singer singer) {
		singerRepo.save(singer);
	}

	public Singer getByID(Long id) {
		return singerRepo.findById(id).get();
	}
	
	public List<Singer> getByName(String name){
		return singerRepo.findByName(name);
	}

	public void deleteByID(Long id) {
		singerRepo.deleteById(id);
	}

}
