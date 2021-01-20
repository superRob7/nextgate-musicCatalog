import React, {Component} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Link from "react-router-dom/Link"
import Nav from "react-bootstrap/Nav";


import 'bootstrap/dist/css/bootstrap.min.css';


class HeaderComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Link to={'/singers'}
                    className="navbar-brand">Music Catalog</Link>
                <Nav className="mr-auto">
                    <Link to={'/singers'}
                        className="nav-link">Singer List</Link>
                    <Link to={'/singers/add/0'}
                        className="nav-link">Add Singer</Link>
                    <Link to={'/albums'}
                        className="nav-link">Album List</Link>
                    <Link to={'/albums/add/0'}
                        className="nav-link">Add Album</Link>
                    <Link to={'/singers'}
                        className="nav-link">Add User</Link>
                </Nav>

                <Nav className="navbar-right">
                    <Link to={'/register'}
                        className="nav-link">Register</Link>
                    <Link to={'/login'}
                        className="nav-link">Login</Link>
                </Nav>


            </Navbar>

        );
    }
}

export default HeaderComponent;
