package com.musicCatalog.MusicCatalog.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.musicCatalog.MusicCatalog.models.Album;
import com.musicCatalog.MusicCatalog.models.Singer;
import com.musicCatalog.MusicCatalog.services.AlbumService;
import com.musicCatalog.MusicCatalog.services.SingerService;


/**
 * This class is the rest controllers for all operations relating to both
 * singers and albums. This rest controller interacts with both the
 * "SingerService" & "AlbumService". Both services control the CRUD operations
 * to the database. The client can not interact with the services directly.
 * 
 * @author Robert Dunsmore
 *
 */
@RestController
@RequestMapping("/restapi")
//Allowing the API to respond to the front-end 
@CrossOrigin(origins="http://localhost:3000")
public class MusicCatalogRestController {

	/*********************************************
	 * Album Operations
	 *********************************************/

	/**
	 * The already instantiated AlbumService that spring has already created.
	 */
	@Autowired
	private AlbumService albumService;

	/**
	 * This method is called from the front-end to retrieve all of the albums within
	 * the database.
	 * @return List<Album> : A list of all the albums stored in the database.
	 */
	@RequestMapping("/get/albums")
	public List<Album> getAllAlbums() {
		List<Album> albumList = albumService.listAll();
		return albumList;
	}

	/**
	 * This method is called from the front-end to retrieve a specific album from
	 * the database based on the id include within the url.
	 * 
	 * @param id : The id of the album to retrieve
	 * @return album : The album stored in the database with the given id
	 */
	@RequestMapping("/get/album/{id}")
	public Album getAlbumByID(@PathVariable(name = "id") Long id) {
		Album album = albumService.get(id);
		return album;
	}
	
	@RequestMapping("/get/album/singer/{id}")
	public List<Album> getAlbumBySingerID(@PathVariable(name = "id") Long id) {
		List<Album> albums = albumService.findBySingerId(id);
		return albums;
	}
	
	@RequestMapping("/get/album/singer/name/{name}")
	public List<Album> getAlbumBySingerName(@PathVariable(name = "name") String name) {
		List<Album> albumList = albumService.findBySingerName(name);
		return albumList;
	}
	
	@RequestMapping("/get/album/name/{name}")
	public List<Album> getAlbumByAlbumName(@PathVariable(name="name") String name){
		List<Album> albumList = albumService.findAlbumByAlbumName(name);
		return albumList;
	}

	/**
	 * This method is called from the front-end to save an album to the database.
	 * 
	 * @param album : The album to be added to the database
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/album/save")
	public void addAlbum(@RequestBody Album album) {
		
		if(album.getSinger() != null)
		{
			getSingerFromIncomingPostRequest(album);
			albumService.save(album);
		} 
		
		
		
	}
	
	/**
	 * This methods is used to grab the singer object based on the id or name included in the json post object. 
	 * If the singer id is present then that single singer will be fetched and set to the albums.singer field. 
	 * If the singers name is present then a list of singers with that name are fetched, currently i am just taking the 
	 * first singer in the list and again setting it to the album.singer field.
	 * @param inComingAlbumObject
	 * @return
	 */
	private Album getSingerFromIncomingPostRequest(Album inComingAlbumObject) {
		
		if(inComingAlbumObject.getSinger() != null)
		{
			if(inComingAlbumObject.getSinger().getId() > 0) {
				Singer savedSinger = (Singer) singerService.getByID(inComingAlbumObject.getSinger().getId());
				inComingAlbumObject.setSinger(savedSinger);
			} else if (inComingAlbumObject.getSinger().getName() != null) {
				List<Singer> listOfSavedSinger = singerService.getByName(inComingAlbumObject.getSinger().getName());
				inComingAlbumObject.setSinger(listOfSavedSinger.get(0));
				
			}
		}
		return inComingAlbumObject;
			
	}

	/**
	 * This method is called from the front-end to update an album. When the call is
	 * made the id of the album is incuded within the url to allow the rest
	 * controller to reterive a copy of the already saved album. Once the album has
	 * been located, its values are updated to reflect the changes from the
	 * submitted album. If the submition does not contain a field then this
	 * Ignored. Fields that contain a value are extracted and used to update the
	 * already stored record. This is then saved to the database updating the
	 * record.
	 * 
	 * @param album : The submitted album object with the new values
	 * @param id : The id of the sotored album, to located the record to update
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/album/update/{id}")
	public void updateAlbum(@RequestBody Album album, @PathVariable(name = "id") Long id) {

		Album savedAlbum = albumService.get(id);

		// If the incoming album object album name is null then don't update
		if (!(album.getAlbum() == null)) {
			savedAlbum.setAlbum(album.getAlbum());
		}

		// If the incoming album object album year is null then don't update
		if (!(album.getYear() == null)) {
			savedAlbum.setYear(album.getYear());
		}

		// If the incoming album object album company is null then don't update
		if (!(album.getCompany() == null)) {
			savedAlbum.setCompany(album.getCompany());
		}

		// If the incoming album object singerID is not 0 or bellow
		if (!(album.getSinger() == null)) {
			savedAlbum.setSinger(album.getSinger());
		}

		albumService.save(savedAlbum);
	}

	/**
	 * This method is called from the front-end to delete an album in the database.
	 * @param id : The id of the album to delete 
	 * @return Boolean : True if the album could be deleted and false if not.
	 */
	@RequestMapping("/album/delete/{id}")
	public boolean deleteAlbum(@PathVariable(name = "id") int id) {
		try {
			albumService.delete(id);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	
	

	/*********************************************
	 * Singer Operations
	 ****************************************************************************************/

	/**
	 * The already instantiated SingerService that spring has already created.
	 */
	@Autowired
	private SingerService singerService;

	
	/**
	 * This method is called from the front-end to retrieve all of the singer within
	 * the database.
	 * @return List<Singer> : A list of all the singers stored in the database.
	 */
	@RequestMapping("/get/singers")
	public List<Singer> getAllSingers() {
		List<Singer> singerList = singerService.listAll();
		return singerList;
	}

	/**
	 * This method is called from the front-end to retrieve a specific singer from
	 * the database based on the id include within the url.
	 * 
	 * @param id : The id of the singer to retrieve
	 * @return singer : The singer stored in the database with the given id
	 */
	@RequestMapping("/get/singer/{id}")
	public Singer getSingerByID(@PathVariable(name = "id") Long id) {
		return singerService.getByID(id);
	}

	@RequestMapping("/get/singer/name/{name}")
	public List<Singer> getSingerByName(@PathVariable(name = "name") String name) {
		return singerService.getByName(name);
	}

	/**
	 * This method is called from the front-end to save an singer to the database.
	 * 
	 * @param singer : The album to be added to the database
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/singer/save")
	public void saveSinger(@RequestBody Singer singer) {
		singerService.save(singer);
	}

	/**
	 * This method is called from the front-end to update an album. When the call is
	 * made the id of the singer is included within the URL to allow the rest
	 * controller to retrieve a copy of the already saved singer. Once the singer has
	 * been located, its values are updated to reflect the changes from the
	 * submitted singer. If the submition does not contain a field then this
	 * Ignored. Fields that contain a value are extracted and used to update the
	 * already stored record. This is then saved to the database updating the
	 * record.
	 * 
	 * @param singer : The submitted singer object with the new values
	 * @param id : The id of the stored singer, to located the record to update
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/singer/update/{id}")
	public void updateSinger(@RequestBody Singer singer, @PathVariable(name = "id") Long id) {

		Singer savedSinger = singerService.getByID(id);

		// If the incoming singer object name is null then don't update
		if (!(singer.getName() == null)) {
			savedSinger.setName(singer.getName());
		}

		// If the incoming singer object dob is null then don't update
		if (!(singer.getDob() == null)) {
			savedSinger.setDob(singer.getDob());
		}

		// If the incoming singer object sex is null then don't update
		if (!(singer.getSex() == null)) {
			savedSinger.setSex(singer.getSex());
		}

		// If the incoming album object album company is null then don't update
		if (!(singer.getCompany() == null)) {
			savedSinger.setCompany(singer.getCompany());
		}

		singerService.save(savedSinger);
	}

	/**
	 * This method is called from the front-end to delete an singer in the database.
	 * @param id : The id of the singer to delete 
	 * @return Boolean : True if the singer could be deleted and false if not.
	 */
	@RequestMapping("/singer/delete/{id}")
	public void deleteSinger(@PathVariable(name = "id") Long id) {
		singerService.deleteByID(id);
		return;
	}

	/*****************************************authentication user(FAILED)*********************************************************************************************/
//	
//	@Autowired
//	private BCryptPasswordEncoder passwordEncoder;
//	
//	@Autowired
//	private UserRepository userRepository;
//	
//	@RequestMapping(method = RequestMethod.POST, value = "/user/add")
//	public void addUser( @RequestBody User user)
//	{
//		String password = user.getPassword();
//		 String encrptedPwd = passwordEncoder.encode(password);
//		 user.setPassword(encrptedPwd);
//		 userRepository.save(user);
//	}
//	
//	@RequestMapping(method = RequestMethod.GET, value = "/get/user/{name}",  produces = "application/json")
//	public User getUser( @PathVariable(name = "nameUser") String userName)
//	{
//		return userRepository.findByUserName(userName);
//	}
//	
	
}
