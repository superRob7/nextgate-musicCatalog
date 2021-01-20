# Next Gate Music Catalog
This is my submission of the Next Gate interview scenario. This project is not complete and does not fulfil all of the requirement set out in the project description. The submission consists of a backend constructed using the 'Spring' framework. The frontend is a 'ReactJs' project that makes calls to the backend API. This was my first attempt at using 'Spring' and 'React'.

# Starting The Project
The backend can be interacted with independently from the frontend, however the frontend required the backend API to be running to retrieve data from. 

## Backend
The backend can be loaded into any IDE, however i used the 'Spring Tools 4' to create the project. The project is built using Java 8, so this version or higher must be installed. The project can be imported into the IDE and Maven can be used to build the project structure. The application can be started by running the project from the 'MusicCatalogApplication' class. The application will start on port 8080, so if anything else is using this port it must be stopped or the port attribute can be changed in 'application.properties' file. 

The backend has the most functionality out of both parts of the project. The API can be interacted with using the 'Postman' web tool. Using this tool you can interact with all implemented sections of the API. The API can create, read, update and delete from both the singers and albums tables in the database. 

### Creating & Updating
When adding or updating a record the object must be include within the POST request as a json object. The ID and record type are not required however, this because the id is a primary key and is being automatically generated. The record type is being set by the database as a default value, this is setup for both singers and albums. 

### API Entry Points
See bottom of this page for examples of the json file needed to create & update singer and albums.

#### Singers
* Singer Get Request(s)
    * 'http://localhost:8080/restapi/get/singers'
        * Returns a list of all the singers within the database
    * 'http://localhost:8080/restapi/get/singer/{id}'
        * Returns one singer with the given id
    * 'http://localhost:8080/restapi/get/singer/name/{name}'
        * Returns one singer with the given name (%20 can be used to represent white space) 
* Singer Post Request(s)
    * 'http://localhost:8080/restapi/singer/save'
        * Expects a singer object as json (ID and recordType are not required)
    * 'http://localhost:8080/restapi/singer/update/{id}'
        * Update a singer with the given id and this method Expects a singer object as json (ID and recordType are not required)
* Singer Delete Request
    * 'http://localhost:8080/restapi/singer/delete/{id}'
        * Deletes a singer with a given id

#### Albums
* Album Get Request(s)
    * 'http://localhost:8080/restapi/get/albums'
        * Returns a list of all the albums within the database
    * 'http://localhost:8080/restapi/get/album/{id}'
        * Returns one album with the given id
    * 'http://localhost:8080/restapi/get/album/name/{name}'
        * Returns one album with the given name (%20 can be used to represent white space) 
    * 'http://localhost:8080/restapi/get/album/singer/{id}'
        * Returns a list of albums related to a singer base on the singers ID (%20 can be used to represent white space) 
    * 'http://localhost:8080/restapi/get/album/singer/name/{name}'
        * Returns a list of albums related to a singer base on the singers name (%20 can be used to represent white space) 
* Album Post Request(s)
    * 'http://localhost:8080/restapi/album/save'
        * Expects an album object that contains a singer as json (ID and recordType are not required)
    * 'http://localhost:8080/restapi/singer/update/{id}'
        * Update am album with the given id and this method expects an album object that contains a singer as json (ID and recordType are not required)
* Album Delete Request
    * 'http://localhost:8080/restapi/album/delete/{id}'
        * Deletes an album with a given id

## Frontend
The frontend is a React app that runs on port '3000' and can be started by navigating to the directory that contains the app and executing the 'npm start' command. This app can view the singer and albums within the database. Singers can be added to the database, however, albums can not be created. Updating singer and albums are forbidden from the app due to failed authentication implementation.  The app was created using the 'npx create-react-app' which does not inject all of the dependance needed. The dependance that are required are as follows: 

* 'npm install react-bootstrap'
    * Adding the bootstrap components
* 'npm install popper.js'
    * A Bootstrap required dependance
* 'npm install jquery'
    * A Bootstrap required dependance
* 'npm install react-router-dom'
    * Adds the routing capability of the app 
* 'npm install axios'
    * Used for calling the backend API

### Routes 
* 'http://localhost:3000/singers
    * View the singer list
* 'http://localhost:3000/singers/add
    * '/0' acts as a create
    * '/{id}' acts as an update 
* 'http://localhost:3000/albums
    * View the singer list
* 'http://localhost:3000/albums/add
    * '/0' acts as a create
    * '/{id}' acts as an update 
    
## Database
The project does not read in the supplied text file to populate the database, so I have included a copy of the database with all of the values present. 

## Json Examples 
* Add Singer 
    * {
        "name": "BRITNEY SPEARS",
        "dob": "1981-12-15",
        "sex": "FEMALE",
        "company": "COLUMBIA RECORDS"
    }
* Add Album
    * {{
"singer": {
        "name": "BRITNEY SPEARS",
        "dob": "1981-12-15",
        "sex": "FEMALE",
        "company": "COLUMBIA RECORDS"
    },
"year": "1990",
"company": "RECORDS",
"album": "ALBUM"
}}

