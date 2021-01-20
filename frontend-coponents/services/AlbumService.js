import axios from "axios";

// Get API calls
const ALBUM_API_BASE_URL = "http://localhost:8080/restapi/get/albums";
const ALBUM_API_GET_SINGER_URL = "http://localhost:8080/restapi/get/album/singer/"
const ALBUM_GET_BY_ID_URL = "http://localhost:8080/restapi/get/album/";

// Post API calls
const ALBUM_API_ADD_ALBUM_URL = "http://localhost:8080/restapi/album/save"


// Delete API Calls
const ALBUM_API_UPDATE_ALBUM_URL = "http://localhost:8080/restapi/album/update/";

/**
 * This class is responsible for making all of the calls relating to the albums part of the api. 
 */
class AlbumService { // Getting all of the saved albums
    getAlbums() {
        return axios.get(ALBUM_API_BASE_URL);
    }

    // Getting a single album based on its id
    getAlbumById(albumId) {
        return axios.get(ALBUM_GET_BY_ID_URL + albumId);
    }

    // Getting all of the albums linked to a singer by the singers id
    getSinger(singerId) {
        return axios.get(ALBUM_API_GET_SINGER_URL + singerId);
    }

    // Create a new album
    createAlbum(album) {
        return axios.put(ALBUM_API_ADD_ALBUM_URL, album)
    }

    // Update an album based on the albums id
    updateAlbum(album) {
        return axios.post(ALBUM_API_UPDATE_ALBUM_URL + album.id, album);
    }

}

export default new AlbumService();
