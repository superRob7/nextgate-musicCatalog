import React, { Component } from "react";
import SingerService from "../../services/SingerService";

class ListSingersComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      singers: [],
    };

    this.addSinger = this.addSinger.bind(this);
    this.editSinger = this.editSinger.bind(this);
    this.deleteSinger = this.deleteSinger.bind(this);
  }

  componentDidMount() {
    SingerService.getSingers().then((res) => {
      this.setState({ singers: res.data });
    });
  }

  addSinger() {
    //The history is used to store routing by the BrowserRouter in App.js
    //pushing to the add Singer component with the id 0 to indicate a new singer 
    this.props.history.push("/singers/add/0");
  }

  editSinger(singerId) {
    //Pushing to the add Singer component with the id of the singer to be updated
    this.props.history.push(`/singers/add/${singerId}`);
  }

  deleteSinger(singerId) {
    SingerService.deleteSinger(singerId).then((response) => {
      this.setState({ singers: this.state.singers.filter(singer => singer.id !== singer.id) });
    });
  }

  viewSinger(singerId) {
    this.props.history.push(`/singers/view/${singerId}`);
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Singer List</h2>
        <div className="row">
          <button
            type="button"
            class="btn btn-primary"
            onClick={this.addSinger}
          >
            Add Singer
          </button>
        </div>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Singer ID</th>
                <th>Singer Name</th>
                <th>Singer Date Of Birth</th>
                <th>Singer Sex</th>
                <th>Singer Company</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {this.state.singers.map((singer) => (
                <tr key={singer.id}>
                  <td>{singer.id}</td>
                  <td>{singer.name}</td>
                  <td>{singer.dob}</td>
                  <td>{singer.sex}</td>
                  <td>{singer.company}</td>
                  <td>
                    <button onClick={() => this.editSinger(singer.id)} className="btn btn-info">Update</button>
                    <button style={{ marginLeft: "10px" }} onClick={() => this.deleteSinger(singer.id)} className="btn btn-danger">Delete</button>
                    <button style={{ marginLeft: "10px" }} onClick={() => this.viewSinger(singer.id)} className="btn btn-info">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListSingersComponent;
