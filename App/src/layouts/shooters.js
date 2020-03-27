import React, {Component} from 'react';
import {
    Button,
    Container,
} from 'reactstrap';
import {MDBDataTable, MDBBtn} from 'mdbreact';
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
                    label: 'Delete',
                    field: 'delete',
                    sort: 'asc',
                    width: 100
                }
            ],
            rows: [
                {
                    firstname: 'Συμεών',
                    lastname: 'Τασκάρης',
                    club: 'ΕΣΚΟΘ',
                    date: '2020/02/20',
                    score: '542',
                    delete: <MDBBtn color="pink" rounded size="sm" onClick={(event => {
                        console.log('simos')
                    })}>Button</MDBBtn>
                },
                {
                    firstname: 'Παύλος',
                    lastname: 'Βουγιουκλής',
                    club: 'ΕΣΚΟΘ',
                    date: '2018/05/01',
                    score: '575',
                    delete: <MDBBtn color="pink" rounded size="sm">Button</MDBBtn>
                },
                {
                    firstname: 'Tiger Nixon',
                    lastname: 'System Architect',
                    club: 'Edinburgh',
                    date: '2018/05/01',
                    score: '575',
                    delete: <MDBBtn color="pink" rounded size="sm">Button</MDBBtn>
                }
            ]
        };

        return (
            <Container style={{maxWidth: '100%'}}>
                <Link to="/">
                    <Button className="back-button" color="info" size="sm">BACK</Button>
                </Link>
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
