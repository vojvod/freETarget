import React, {Component} from 'react';
import {Button, Container, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input} from 'reactstrap';
import {MDBDataTable} from 'mdbreact';
import '../css/main.css';
import {Link} from "react-router-dom";
import {fetchAppShooters, addAppShooter, updateAppShooter, deleteAppShooter} from '../ducks/shooters'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class Shooters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shooter: false,
            deleteShooter: false,
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
        this.getData();
    }

    getData = () => {
        this.props.fetchAppShooters(this.props.token, this.props.userId).then((results) => {
            this.setState({
                data: {
                    columns: this.columns,
                    rows: results.map(e => ({
                        firstname: e.firstname,
                        lastname: e.lastname,
                        club: e.club,
                        registrationnumber: e.registrationnumber,
                        edit: <Button className="delete-button" color="warning" size="sm" onClick={() => {
                            this.setState({...e, shooter: true})
                        }}>Edit</Button>,
                        delete: <Button className="delete-button" color="danger" size="sm" onClick={() => {
                            this.setState({deleteShooter: e.id})
                        }}>Delete</Button>
                    }))
                }
            })
        });
    };

    change = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    addNewShooter = () => {
        this.props.addAppShooter({
            token: this.props.token,
            userId: this.props.userId,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            club: this.state.club,
            registrationnumber: this.state.registrationnumber
        }).then((results) => {
            this.setState({
                shooter: false,
                data: {
                    columns: this.columns,
                    rows: results.map(e => ({
                        firstname: e.firstname,
                        lastname: e.lastname,
                        club: e.club,
                        registrationnumber: e.registrationnumber,
                        edit: <Button className="delete-button" color="warning" size="sm" onClick={() => {
                            this.setState({...e, shooter: true})
                        }}>Edit</Button>,
                        delete: <Button className="delete-button" color="danger" size="sm" onClick={() => {
                            this.setState({deleteShooter: e.id})
                        }}>Delete</Button>
                    }))
                }
            })
        });
    };

    updateShooter = () => {
        this.props.updateAppShooter({
            id: this.state.id,
            token: this.props.token,
            userId: this.props.userId,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            club: this.state.club,
            registrationnumber: this.state.registrationnumber
        }).then((results) => {
            this.setState({
                shooter: false,
                data: {
                    columns: this.columns,
                    rows: results.map(e => ({
                        firstname: e.firstname,
                        lastname: e.lastname,
                        club: e.club,
                        registrationnumber: e.registrationnumber,
                        edit: <Button className="delete-button" color="warning" size="sm" onClick={() => {
                            this.setState({...e, shooter: true})
                        }}>Edit</Button>,
                        delete: <Button className="delete-button" color="danger" size="sm" onClick={() => {
                            this.setState({deleteShooter: e.id})
                        }}>Delete</Button>
                    }))
                }
            })
        });
    };

    deleteShooter = () => {
        this.props.deleteAppShooter({
            deleteShooter: this.state.deleteShooter,
            token: this.props.token,
            userId: this.props.userId
        }).then((results) => {
            this.setState({
                shooter: false,
                deleteShooter: false,
                data: {
                    columns: this.columns,
                    rows: results.map(e => ({
                        firstname: e.firstname,
                        lastname: e.lastname,
                        club: e.club,
                        registrationnumber: e.registrationnumber,
                        edit: <Button className="delete-button" color="warning" size="sm" onClick={() => {
                            this.setState({...e, shooter: true})
                        }}>Edit</Button>,
                        delete: <Button className="delete-button" color="danger" size="sm" onClick={() => {
                            this.setState({deleteShooter: e.id})
                        }}>Delete</Button>
                    }))
                }
            })
        });
    };

    render() {
        return (
            <Container style={{maxWidth: '100%'}}>
                <Link to="/">
                    <Button className="back-button" color="info" size="sm">Back</Button>
                </Link>
                <Button className="add-button" color="success" size="sm"
                        onClick={() => this.setState({shooter: 'new'})}>Add</Button>
                <div style={{paddingTop: "50px"}}>
                    <MDBDataTable
                        scrollY
                        maxHeight="60vh"
                        small
                        striped
                        bordered
                        hover
                        data={this.state.data}
                    />
                </div>

                <Modal isOpen={this.state.shooter}>
                    <ModalHeader>{this.state.shooter === 'new' ? 'Add New Shooter' : 'Edit Shooter'}</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="firstname">First name</Label>
                                <Input type="text" name="firstname" id="firstname" onChange={this.change}
                                       value={this.state.firstname ? this.state.firstname : null}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="lastname">Last name</Label>
                                <Input type="text" name="lastname" id="lastname" onChange={this.change}
                                       value={this.state.lastname ? this.state.lastname : null}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="club">Sport Club</Label>
                                <Input type="text" name="club" id="club" onChange={this.change}
                                       value={this.state.club ? this.state.club : null}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="registrationnumber">Registration number</Label>
                                <Input type="text" name="registrationnumber" id="registrationnumber"
                                       onChange={this.change}
                                       value={this.state.registrationnumber ? this.state.registrationnumber : null}/>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        {
                            this.state.shooter === 'new' ?
                                <Button className="button" size="sm" color="success"
                                        onClick={this.addNewShooter}>Add</Button>
                                :
                                <Button className="button" size="sm" color="success"
                                        onClick={this.updateShooter}>Update</Button>
                        }
                        {' '}
                        <Button className="button" size="sm" color="secondary"
                                onClick={() => this.setState({shooter: false})}>Cancel</Button>
                    </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.deleteShooter}>
                    <ModalHeader>Add New Shooter</ModalHeader>
                    <ModalBody>
                        Do you want to delete the shooter?
                    </ModalBody>
                    <ModalFooter>
                        <Button className="button" size="sm" color="danger"
                                onClick={this.deleteShooter}>Delete</Button>{' '}
                        <Button className="button" size="sm" color="secondary"
                                onClick={() => this.setState({deleteShooter: false})}>Cancel</Button>
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

const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchAppShooters,
    addAppShooter,
    updateAppShooter,
    deleteAppShooter
}, dispatch);

Shooters = connect(mapStateToProps, mapDispatchToProps)(Shooters);

export default Shooters;
