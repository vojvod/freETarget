import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchAppToken} from '../ducks/dashboard';
import {fetchAppShooters} from '../ducks/shooters';
import Header from "../components/header";
import Footer from '../components/footer';
import {
    Container,
    Row,
    Col,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup, Label, Input, ModalFooter, Button, Modal
} from 'reactstrap';
import '../css/main.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            token: this.props.token,
            userId: this.props.userId,
            shooters: this.props.shooters,
            shooterId: ''
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.token !== prevProps.token || this.props.userId !== prevProps.userId || this.props.shooters.length !== this.state.shooters.length) {
            this.setState({
                token: this.props.token,
                userId: this.props.userId,
                shooters: this.props.shooters
            });
        }
    }

    change = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    login = () => {
        this.props.fetchAppToken(this.state.username, this.state.password).then(()=>{
            this.props.fetchAppShooters(this.state.token, this.state.userId)
        });
    };

    render() {

        return (
            <Container className="App">
                <Header/>
                <Row>
                    <Col>
                        <Form>
                            <FormGroup>
                                <Label for="shooterId"><h3>Select Shooter</h3></Label>
                                <Input type="select" name="shooterId" id="shooterId" onChange={this.change} value={this.state.shooterId}>
                                    <option value={''}>please select...</option>
                                    {
                                        this.state.shooters.map(e=> <option key={e.id} value={e.id}>{e.firstname} {e.lastname} ({e.club} - {e.registrationnumber})</option>)
                                    }
                                </Input>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to={'/pistol/' + this.state.shooterId} className={this.state.shooterId !== '' ? '' : 'disabled-link'}>
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
                        <Link to={'/rifle/' + this.state.shooterId} className={this.state.shooterId !== '' ? '' : 'disabled-link'}>
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

                <Modal isOpen={!this.state.userId}>
                    <ModalHeader>freETarget Login </ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="username">Username</Label>
                                <Input type="email" name="email" id="username" onChange={this.change}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input type="password" name="password" id="password" onChange={this.change}/>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.login}>OK</Button>
                    </ModalFooter>
                </Modal>

            </Container>
        );
    }
}

const mapStateToProps = (state) => ({
    token: state.dashboard.token,
    userId: state.dashboard.userId,
    shooters: state.shooters.shooters
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchAppToken,
    fetchAppShooters
}, dispatch);

Home = connect(mapStateToProps, mapDispatchToProps)(Home);

export default Home;

