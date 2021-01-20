import React, {Component} from "react";
import AlbumService from "../../services/AlbumService";
import SingerService from "../../services/SingerService";


/**
 * This component class is used to render the form used to create an album. 
 * Currently this class does not function correctly. The class that is made to add or update a album is not implemented correctly due to the relationship with a singer
 */
class CreateAlbumComponent extends Component {
    constructor(props) {
        super(props);

        // Used to hold the form data
        this.state = {
            id: this.props.match.params.id,
            singer: {},
            albumName: "",
            year: "",
            company: ""
        };

        // Binding the event handlers to this object

        this.albumNameInputHandler = this.albumNameInputHandler.bind(this);
        this.yearInputHandler = this.yearInputHandler.bind(this);
        this.companyInputHandler = this.companyInputHandler.bind(this);

        this.loadOptions = this.loadOptions.bind(this);

        this.saveAlbum = this.saveAlbum.bind(this);
        this.cancelForm = this.cancelForm.bind(this);

    }

    // Getting all the singers to try and populate a selector that would only all user to select singer already available within the database
    componentDidMount() {
        SingerService.getSingers().then((response) => {
            this.setState({singer: response.data})
            console.log(this.state.singer)
        });

        // Check to see if it is an add or update call
        if (this.state.id > 0) {
            AlbumService.getAlbumById(this.state.id).then((response) => {
                let album = response.data;
                this.setState({singer: album.singer, albumName: album.album, year: album.year, company: album.company});
            });

        } else { // The id is negative so this is an add request so just return
            return;
        }

    }

    // Storing the input value in this object
    singerInputHandler = (event) => {
        SingerService.getSingerByName(event.target.value).then((response) => {
            this.setState({singer: response.data});
        });
    }

    // Storing the input value in this object
    albumNameInputHandler = (event) => {
        this.setState({albumName: event.target.value});
    }

    // Storing the input value in this object
    yearInputHandler = (event) => {
        this.setState({year: event.target.value});
    }

    // Storing the input value in this object
    companyInputHandler = (event) => {
        this.setState({company: event.target.value});
    }

    // Saving the singer by using the supplied inputs
    saveAlbum = (e) => {
        e.preventDefault();
        // Converting all the fields into a singer object
        let album = {
            albumName: this.state.albumName,
            singer: this.state.singer.id,
            year: this.state.year,
            company: this.state.company
        };

        // Check to see if it is an add or update call
        if (this.state.id <= 0) { // Calling the API to save the singer and redirect the user back to the singers list
            AlbumService.createAlbum(album).then(response => {
                this.props.history.push('/albums');
            });

        } else {
            AlbumService.updateAlbum(album, this.state.id).then(response => {
                this.props.history.push('/albums');
            });
        }


        // Calling the API to save the singer and redirect the user back to the singers list
        AlbumService.createAlbum(album).then(response => {
            this.props.history.push('/albums');
        });
    }

    // Cancel the whole process and send the user back to the singers list
    cancelForm() {
        this.props.history.push('/albums');
    }

    getCorrectTitle() {
        if (this.state.id > 0) {
            return <h3 className="text-center">Update Album</h3>
        } else {
            return <h3 className="text-center">Add Album</h3>
        }
    }


    loadOptions() {
        SingerService.getSingers().then((response) => {
            this.setState({storedSingers: response.data})
        })
    }


    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3">
                            {
                            this.getCorrectTitle()
                        }
                            <div className="card-body">
                                <form>

                                    <div className="form-group">
                                        <label>
                                            Album Name:
                                        </label>
                                        <input placeholder="Album Name" name="albumName" className="form-control"
                                            value={
                                                this.state.albumName
                                            }
                                            onChange={
                                                this.albumNameInputHandler
                                            }/>
                                    </div>

                                    <div className="form-group">
                                        <label>Year Of Publication</label>
                                        <input placeholder="2021" name="year" className="form-control"
                                            value={
                                                this.state.year
                                            }
                                            onChange={
                                                this.yearInputHandler
                                            }/>
                                    </div>

                                    <div className="form-group">
                                        <label>Singer Name</label>
                                        <input placeholder="Singer Name" name="singer" className="form-control"
                                            value={
                                                this.state.singer.name
                                            }
                                            onChange={
                                                this.singerInputHandler
                                            }/>
                                    </div>

                                    <div className="form-group">
                                        <label>Company Name</label>
                                        <input placeholder="Company Name" name="company" className="form-control"
                                            value={
                                                this.setState.company
                                            }
                                            onChange={
                                                this.companyInputHandler
                                            }/>
                                    </div>

                                    <button class="btn btn-success"
                                        onClick={
                                            this.saveAlbum
                                    }>Save</button>
                                    <button class="btn btn-danger"
                                        onClick={
                                            this.cancelForm
                                    }>Cancel</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateAlbumComponent;
