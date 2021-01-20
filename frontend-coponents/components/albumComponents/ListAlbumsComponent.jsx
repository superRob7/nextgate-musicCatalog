import React, {Component} from "react";
import AlbumService from "../../services/AlbumService";

/**
 * This component class is responsible for rendering the table used to list all of the albums records within the database.
 */
class ListAlbumsComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            albums: []
        };

        this.addAlbum = this.addAlbum.bind(this);
    }

    /**Getting all of the albums in the database and storing them locally */
    componentDidMount() {
        AlbumService.getAlbums().then((res) => {
            this.setState({albums: res.data});
        });
    }

    addAlbum() { // The history is used to store routing by the BrowserRouter in App.js
        this.props.history.push("albums/add/0");
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Album List</h2>
                <div className="row">
                    <button type="button" class="btn btn-primary"
                        onClick={
                            this.addAlbum
                    }>
                        Add Album
                    </button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Album ID</th>
                                <th>Album Artist</th>
                                <th>Year Released</th>
                                <th>Album Company</th>
                            </tr>
                        </thead>

                        <tbody> {
                            this.state.albums.map((album) => (
                                <tr key={
                                    album.id
                                }>
                                    <td>{
                                        album.id
                                    }</td>
                                    <td>{
                                        album.singer.name
                                    }</td>
                                    <td>{
                                        album.year
                                    }</td>
                                    <td>{
                                        album.company
                                    }</td>
                                </tr>
                            ))
                        } </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListAlbumsComponent;
