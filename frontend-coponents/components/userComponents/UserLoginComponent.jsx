import React, {Component} from 'react';
import {
    Row,
    Col,
    Card,
    Form,
    FormControl,
    InputGroup,
    Button
} from "react-bootstrap";

class UserLoginComponent extends Component {

    constructor(props) {
        super(props);

        // Used to hold the form data
        this.state = {
            userName: '',
            password: ''
        };
        this.inputHandler = this.inputHandler.bind(this);
    }

    inputHandler = event => {
        this.setState({userName: event.target.value});
        console.log.toString(this.userName);
    }

    render() {
        return (

            <Row className="justify-content-md-center">
                <Col xs={5}>
                    <Card className={"border border-dark bg-dark text-white"}>
                        <Card.Header>
                            <p>Login</p>
                        </Card.Header>
                        <Card.Body>
                            <Form.Row>
                                <Form.Group>
                                    <InputGroup>

                                        <FormControl required type="text" name="userName"
                                            onChange={
                                                this.inputHandler
                                            }
                                            className={"bg-dark text-white"}
                                            placeholder="User Name"/>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group>
                                    <InputGroup>
                                        <FormControl required type="password" name="password"
                                            onChange={
                                                this.inputHandler
                                            }
                                            className={"bg-dark text-white"}
                                            placeholder="Enter Password"/>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                        </Card.Body>
                        <Card.Footer style={
                            {"text-align": "right"}
                        }>
                            <Button size="sm" type="button" variant="success"

                                disabled={
                                    this.state.userName.length === 0 || this.state.password.length === 0
                            }>

                                Login
                            </Button>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default UserLoginComponent;
