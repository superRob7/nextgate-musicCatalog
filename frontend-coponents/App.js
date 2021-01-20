import logo from "./logo.svg";
import "./App.css";
import {Container, Row, Col, Footer} from "react-bootstrap";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import HeaderComponent from "./components/HeaderComponent";
import ListSingersComponent from "./components/singerComponents/ListSingersComponent";
import CreateSingerComponent from "./components/singerComponents/CreateSingerComponent";
import ViewSingerComponent from "./components/singerComponents/ViewSingerComponent";
import ListAlbumsComponent from "./components/albumComponents/ListAlbumsComponent";
import CreateAlbumComponent from "./components/albumComponents/CreateAlbumComponent"

function App() {
    return (
        <Router>
            <HeaderComponent/>
            <Container>
                <Row>
                    <Col className={"margin-top"}>
                        <Switch> {/** Configure Routes for singers*/}
                            <Route path="/" exact
                                component={ListSingersComponent}></Route>
                            <Route path="/singers" exact
                                component={ListSingersComponent}></Route>
                            <Route path="/singers/add/:id" exact
                                component={CreateSingerComponent}></Route>
                            <Route path="/singers/view/:id" exact
                                component={ViewSingerComponent}></Route>

                            {/** Configure Routes for albums*/}
                            <Route path="/albums" exact
                                component={ListAlbumsComponent}></Route>
                            <Route path="/albums/add/:id" exact
                                component={CreateAlbumComponent}></Route>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </Router>
    );
}

export default App;
