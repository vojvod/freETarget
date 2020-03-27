import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setToken, setUserID} from '../ducks/dashboard'
import API from "../utils/API";
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
            userId: this.props.token
        }
    }

    componentDidMount() {
        console.log(this.props);
    }

    change = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    login = () => {
        API.post('/session', {
            username: this.state.username,
            password: this.state.password
        }).then((results)=>{
            this.setState({
                userId: results.data.user ? results.data.user.userId : false,
                showLogin: false
            });

            this.props.setToken(results.data.token);
            this.props.setUserID(results.data.user.userId);
            // localStorage.setItem('freETarget_token', results.data.token);
            // localStorage.setItem('freETarget_userId', results.data.user.userId);

            // API.get('/shooters?token=' + results.data.token).then((e)=>{
            //     console.log(e);
            //     console.log(localStorage.getItem('freETarget'));
            // })
        });
    };

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

                <Modal isOpen={!this.state.userId} >
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
    userID: state.dashboard.userId
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    setToken,
    setUserID
}, dispatch);

Home = connect(mapStateToProps, mapDispatchToProps)(Home);

export default Home;

