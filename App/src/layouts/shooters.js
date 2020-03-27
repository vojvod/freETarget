import React, {Component} from 'react';
import {
    Button,
    Container,
} from 'reactstrap';
import {MDBDataTable} from 'mdbreact';
import '../css/main.css';
import {Link} from "react-router-dom";

class Shooters extends Component {

    render() {

        const data = {
            columns: [
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
                    label: 'Date',
                    field: 'date',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'Score',
                    field: 'score',
                    sort: 'asc',
                    width: 150
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
            ],
            rows: [
                {
                    firstname: 'Παύλος',
                    lastname: 'Βουγιουκλής',
                    club: 'ΕΣΚΟΘ',
                    date: '2018/05/01',
                    score: '575',
                    edit: <Button className="delete-button" color="warning" size="sm">Edit</Button>,
                    delete: <Button className="delete-button" color="danger" size="sm">Delete</Button>
                }
            ]
        };

        return (
            <Container style={{maxWidth: '100%'}}>
                <Link to="/">
                    <Button className="back-button" color="info" size="sm">Back</Button>
                </Link>
                <Button className="add-button" color="success" size="sm">Add</Button>
                <div style={{paddingTop: "50px"}}>
                    <MDBDataTable
                        striped
                        bordered
                        hover
                        data={data}
                    />
                </div>
            </Container>
        );
    }
}

export default Shooters;
