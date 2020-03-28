import React, {Component} from 'react';
import {Button, Container, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input} from 'reactstrap';
import {MDBDataTable} from 'mdbreact';
import '../css/main.css';
import {Link} from "react-router-dom";
import API from "../utils/API";
import {bindActionCreators} from "redux";
import {setToken, setUserID} from "../ducks/dashboard";
import {connect} from "react-redux";

class Shooters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAddShooter: false,
            data: false
        };
        this.columns = [
            {
                label: 'First Name',
                field: 'firstname',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Last Name',
                field: 'lastname',
                sort: 'asc',
                width: 270
            },
            {
                label: 'Sport Club',
                field: 'club',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Registration Number',
                field: 'registrationnumber',
                sort: 'asc',
                width: 200
            },
            {
                label: '',
                field: 'edit',
                width: 100
            },
            {
                label: '',
                field: 'delete',
                width: 100
            }
        ]
    }

    componentDidMount() {
        API.get('/shooters/?token=' + this.props.token + '&userId=' + this.props.userId, {
            token: this.props.token,
            userId: this.props.userId
        }).then((results) => {
            console.log(results);
            this.setState({
                data: {
                    columns: this.columns,
                    rows: results.data.map(e => ({
                        firstname: e.firstname,
                        lastname: e.lastname,
                        club: e.club,
                        registrationnumber: e.registrationnumber,
                        edit: <Button className="delete-button" color="warning" size="sm">Edit</Button>,
                        delete: <Button className="delete-button" color="danger" size="sm">Delete</Button>
                    }))
                }
            })
        });


    }

    change = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    addNewShooter = () => {
        API.post('/shooters', {
            token: this.props.token,
            userId: this.props.userId,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            club: this.state.sportclub,
            registrationnumber: this.state.registrationnumber
        }).then((results) => {
            console.log(results);
            this.setState({
                showAddShooter: false
            });
        });
    };

    render() {
        return (
            <Container style={{maxWidth: '100%'}}>
                <Link to="/">
                    <Button className="back-button" color="info" size="sm">Back</Button>
                </Link>
                <Button className="add-button" color="success" size="sm"
                        onClick={() => this.setState({showAddShooter: true})}>Add</Button>
                <div style={{paddingTop: "50px"}}>
                    <MDBDataTable
                        striped
                        bordered
                        hover
                        data={this.state.data}
                    />
                </div>
                <Modal isOpen={this.state.showAddShooter}>
                    <ModalHeader>Add New Shooter</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="firstname">First name</Label>
                                <Input type="text" name="firstname" id="firstname" onChange={this.change}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="lastname">Last name</Label>
                                <Input type="text" name="lastname" id="lastname" onChange={this.change}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="sportclub">Sport Club</Label>
                                <Input type="text" name="sportclub" id="sportclub" onChange={this.change}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="registrationnumber">Registration number</Label>
                                <Input type="text" name="registrationnumber" id="registrationnumber"
                                       onChange={this.change}/>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button className="button" size="sm" color="success"
                                onClick={this.addNewShooter}>Add</Button>{' '}
                        <Button className="button" size="sm" color="secondary"
                                onClick={() => this.setState({showAddShooter: false})}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </Container>
        );
    }
}

const mapStateToProps = (state) => ({
    token: state.dashboard.token,
    userId: state.dashboard.userId
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

Shooters = connect(mapStateToProps, mapDispatchToProps)(Shooters);

export default Shooters;
