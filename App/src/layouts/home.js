import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col, Card, CardImg, CardBody, CardTitle} from 'reactstrap';
import '../css/main.css';

class Home extends Component {
    render() {
        return (
            <Container className="App">
                <Row>
                    <Col>
                        <Link to="/pistol">
                            <Card className="startCard">
                                <CardImg top width="100%" src="../img/pistol.svg"
                                         alt="Card image cap"/>
                                <CardBody>
                                    <CardTitle><h1>10m Air Pistol</h1></CardTitle>
                                </CardBody>
                            </Card>
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/rifle">
                            <Card className="startCard">
                                <CardImg top width="100%" src="../img/rifle.svg"
                                         alt="Card image cap"/>
                                <CardBody>
                                    <CardTitle><h1>10m Air Rifle</h1></CardTitle>
                                </CardBody>
                            </Card>
                        </Link>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;
