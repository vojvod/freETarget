import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from "../components/header";
import Footer from '../components/footer';
import {Container, Row, Col, Card, CardImg, CardBody, CardTitle} from 'reactstrap';
import '../css/main.css';

class Home extends Component {
    render() {
        return (
            <Container className="App">
                <Header/>
                <Row>
                    <Col>
                        <Link to="/pistol">
                            <Card className="startCard">
                                <CardImg top width="100%" src="../img/pistol.svg"
                                         alt="Card image cap"/>
                                <CardBody>
                                    <CardTitle><h3>10m Air Pistol</h3></CardTitle>
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
                                    <CardTitle><h3>10m Air Rifle</h3></CardTitle>
                                </CardBody>
                            </Card>
                        </Link>
                    </Col>
                </Row>
                <Footer/>
            </Container>
        );
    }
}

export default Home;
