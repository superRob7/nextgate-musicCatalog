import React, {Component} from "react";
import SingerService from "../../services/SingerService";

/**
 * This component class is responsible for rendering the form used to create an singer record within the data base. 
 * This class does not need the id as spring auto generates this, niter is the record type necessary as the database uses a default value of 'SINGER'
 */
class CreateSingerComponent extends Component {
    constructor(props) {
        super(props);

        // Used to hold the form data
        this.state = {
            // Getting the id from the route, used when updating a record
            id: this.props.match.params.id,
            name: "",
            dob: "",
            sex: "",
            company: ""
        };

        // Binding the event handlers to this object
        this.nameInputHandler = this.nameInputHandler.bind(this);
        this.dobInputHandler = this.dobInputHandler.bind(this);
        this.sexInputHandler = this.sexInputHandler.bind(this);
        this.companyInputHandler = this.companyInputHandler.bind(this);

        this.saveSinger = this.saveSinger.bind(this);
        this.cancelForm = this.cancelForm.bind(this);

    }

    /**
   * Calling the API to get a singer by the id passed in with the route
   * then setting this object variables to reflect the found singer
   */
    componentDidMount() { // Check to see if it is an add or update call
        if (this.state.id > 0) {
            SingerService.getSingerById(this.state.id).then((response) => {
                let singer = response.data;
                this.setState({name: singer.name, dob: singer.dob, sex: singer.sex, company: singer.company});
            });

        } else { // The id is negative so this is an add request so just return
            return;
        }

    }

    // Saving the singer by using the supplied inputs
    saveSinger = (e) => {
        e.preventDefault();
        // Converting all the fields into a singer object
        let singer = {
            name: this.state.name,
            dob: this.state.dob,
            sex: this.state.sex,
            company: this.state.company
        };

        // Check to see if it is an add or update call
        if (this.state.id == 0) { // Calling the API to save the singer and redirect the user back to the singers list
            SingerService.createSinger(singer).then(response => {
                this.props.history.push('/singers');
            });

        } else {
            SingerService.updateSinger(singer, this.state.id).then(response => {
                this.props.history.push('/singers');
            });
        }
    }

    // Storing the input value in this object
    nameInputHandler = (event) => {
        this.setState({name: event.target.value});
    }

    // Storing the input value in this object
    dobInputHandler = (event) => {
        this.setState({dob: event.target.value});
    }

    // Storing the input value in this object
    sexInputHandler = (event) => {
        this.setState({sex: event.target.value});
    }

    // Storing the input value in this object
    companyInputHandler = (event) => {
        this.setState({company: event.target.value});
    }

    // Cancel the whole process and send the user back to the singers list
    cancelForm() {
        this.props.history.push('/singers');
    }

    /**
   * This method sets the title of the page based on the type of request being made. 
   * The id is evaluated again and if the value is greater then 0 it is and update else its and add singer
   */
    getCorrectTitle() {
        if (this.state.id > 0) {
            return <h3 className="text-center">Update Singer</h3>
        } else {
            return <h3 className="text-center">Add Singer</h3>
        }
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
                                            Full Name:
                                        </label>
                                        <input placeholder="Full Name" name="fullName" className="form-control"
                                            value={
                                                this.state.name
                                            }
                                            onChange={
                                                this.nameInputHandler
                                            }/>
                                    </div>

                                    <div className="form-group">
                                        <label>Date Of Birth</label>
                                        <input placeholder="2020-01-01" name="dob" className="form-control"
                                            value={
                                                this.setState.dob
                                            }
                                            onChange={
                                                this.dobInputHandler
                                            }/>
                                    </div>

                                    <div className="form-group">
                                        <label>Sex</label>
                                        <input placeholder="MALE" name="sex" className="form-control"
                                            value={
                                                this.setState.sex
                                            }
                                            onChange={
                                                this.sexInputHandler
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
                                            this.saveSinger
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

export default CreateSingerComponent;
