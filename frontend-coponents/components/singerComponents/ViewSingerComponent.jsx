import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SingerService from '../../services/SingerService';
import AlbumService from '../../services/AlbumService';

class ViewSingerComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            //Getting the id past from the url
            id: this.props.match.params.id,
            singer: {},
            album: {}
        };

    }

    componentDidMount() {
        //Getting the singer from the singers table 
        SingerService.getSingerById(this.state.id).then(response => {
            this.setState({ singer: response.data });
        });

        //Getting the albums related to the singer
        AlbumService.getSinger(this.state.id).then((res) => {
            this.setState({ albums: res.data });
        });


    }


    render() {
        return (
            <div>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center"> View Singer Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label>Singer Name : </label>
                            <div>{this.state.singer.name}</div>
                        </div>

                        <div className="row">
                            <label>Singer DOB : </label>
                            <div>{this.state.singer.dob}</div>
                        </div>

                        <div className="row">
                            <label>Singer Sex : </label>
                            <div>{this.state.singer.sex}</div>
                        </div>

                        <div className="row">
                            <label>Singer Company : </label>
                            <div>{this.state.singer.company}</div>
                        </div>

                        <div className="row">
                            <label>Singer Albums : </label>
                            <div>{this.state.album.album}</div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default ViewSingerComponent;