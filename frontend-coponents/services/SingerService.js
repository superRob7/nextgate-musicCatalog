import axios from 'axios'

// Get API Calls
const SINGER_API_BASE_URL = "http://localhost:8080/restapi/get/singers";
const SINGER_API_GET_SINGER_BY_ID_URL = "http://localhost:8080/restapi/get/singer/";
const SINGER_API_GET_SINGER_BY_NAME_URL = "http://localhost:8080/restapi/get/singer/name/";


// Post API Calls
const SINGER_API_ADD_SINGER_URL = "http://localhost:8080/restapi/singer/save";
const SINGER_API_UPDATE_SINGER_URL = "http://localhost:8080/restapi/singer/update/";

// Delete API Calls
const SINGER_API_DELETE_SINGER_URL = "http://localhost:8080/restapi/delete/singer/";

/**
 * This class is responsible for making all of the calls relating to the singers part of the api. 
 */
class SingerService { // Getting all of the singers
    getSingers() {
        return axios.get(SINGER_API_BASE_URL);
    }

    // Getting a singer base on its id
    getSingerById(singerId) {
        return axios.get(SINGER_API_GET_SINGER_BY_ID_URL + singerId);
    }

    // Getting a singer base on its name
    getSingerByName(singerName) {
        return axios.get(SINGER_API_GET_SINGER_BY_NAME_URL + singerName);
    }

    // Creating a new singer
    createSinger(singer) {
        return axios.post(SINGER_API_ADD_SINGER_URL, singer);
    }

    // Updating an already saved singer
    updateSinger(singer, singerId) {
        return axios.post(SINGER_API_UPDATE_SINGER_URL + singerId, singer);
    }

    // Deleting a singer with a given id
    deleteSinger(singerId) {
        return axios.delete(SINGER_API_DELETE_SINGER_URL + singerId);
    }

}

export default new SingerService()
