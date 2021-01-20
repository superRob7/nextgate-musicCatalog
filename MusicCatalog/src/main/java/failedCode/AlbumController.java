package failedCode;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.ModelAndView;

import com.musicCatalog.MusicCatalog.models.Album;
import com.musicCatalog.MusicCatalog.services.AlbumService;



@Controller
public class AlbumController {

	@Autowired
	private AlbumService albumService;

	RestTemplate restTemplate = new RestTemplate();

	@RequestMapping("/album")
	public String viewAlbumPage(Model model) {

		// Getting api call back as an array of Album objects
		ResponseEntity<Album[]> response = restTemplate.getForEntity("http://localhost:8080/restapi/get/albums",
				Album[].class);
		// Converting the array to a list, by pulling info from the api response
		List<Album> albumList = Arrays.asList(response.getBody());

		model.addAttribute("albumList", albumList);

		return "album_Home";
	}

	@RequestMapping("/album/new")
	public String showNewAlbumPage(Model model) {
		Album album = new Album();
		model.addAttribute("album", album);

		return "new_album";
	}

	@RequestMapping(value = "/album/save", method = RequestMethod.POST)
	public String saveAlbum(@ModelAttribute("album") Album album) {

		restTemplate.postForObject("http://localhost:8080/restapi/album/save", album, Album.class);

		return "redirect:/album";
	}

	@RequestMapping("/edit/album/{id}")
	public ModelAndView showEditAlbumPage(@PathVariable(name = "id") int id) {

		Album albumFromDB = restTemplate.getForObject("http://localhost:8080/restapi/get/album/" + id, Album.class);

		ModelAndView modelAndView = new ModelAndView("new");
		modelAndView.addObject("album", albumFromDB);

		return modelAndView;
	}

	@RequestMapping("/delete/album/{id}")
	public String deleteProduct(@PathVariable(name = "id") int id) {
		Album albumFromDB = restTemplate.getForObject("http://localhost:8080/restapi/get/album/" + id, Album.class);
		albumService.delete(albumFromDB.getId());
		return "redirect:/album";
	}

}
