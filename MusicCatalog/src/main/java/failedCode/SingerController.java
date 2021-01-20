package failedCode;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.ModelAndView;

import com.musicCatalog.MusicCatalog.models.Singer;
import com.musicCatalog.MusicCatalog.services.SingerService;


@Controller
public class SingerController {

	@Autowired
	private SingerService singerService;

	private RestTemplate restTemplate = new RestTemplate();

	/**
	 * Mapping to the root URL. This method makes an API call to return a list of
	 * all of the singers stored within the 'singers' table. The list returned from
	 * the API is then added to the models attributes to be rendered by the view.
	 * 
	 * @param model : Model to hold the list of singers
	 * @return index view
	 */
	@GetMapping("/")
	public String viewHomePage(Model model) {

		// Getting api call back as an array of Album objects
		ResponseEntity<Singer[]> response = restTemplate.getForEntity("http://localhost:8080/restapi/get/singers",
				Singer[].class);
		// Converting the array to a list, by pulling info from the api response
		List<Singer> singerList = Arrays.asList(response.getBody());

		model.addAttribute("singerList", singerList);

		return "index";

	}

	@GetMapping("/new")
	public String add(Model model) {
		model.addAttribute("singer", new Singer());
		return "new";
	}

	// Singer singer

	@RequestMapping(value = "/save", method = RequestMethod.POST)
	public String saveSinger(@ModelAttribute("singer") Singer singer) {

		restTemplate.postForObject("http://localhost:8080/restapi/singer/save", singer, Singer.class);

		return "redirect:/";
	}

	@RequestMapping("/edit/{id}")
	public ModelAndView showEditSingerPage(@PathVariable(name = "id") int id) {

		ModelAndView modelAndView = new ModelAndView("new");
		Singer singer = restTemplate.getForObject("http://localhost:8080/restapi/get/singer/" + id, Singer.class);
		modelAndView.addObject("singer", singer);
		return modelAndView;

	}

	@RequestMapping("/delete/{id}")
	public String deleteSinger(@PathVariable(name = "id") Long id) {
		singerService.deleteByID(id);
		return "redirect:/";
	}

}
