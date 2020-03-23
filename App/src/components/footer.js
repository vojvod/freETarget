import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';

class Footer extends Component {
    render() {
        return (
            <div style={{marginTop: '5em'}}>
                <Button color="danger" style={{width: '10em'}}>Login</Button>{' '}
                <Link to={'/users'}>
                    <Button color="primary" style={{width: '10em'}}>Users</Button>
                </Link>{' '}{' '}
                <Button color="warning" style={{width: '10em'}}>Shooters</Button>{' '}
                <Link to={'/history'}>
                    <Button color="secondary" style={{width: '10em'}}>History</Button>
                </Link>{' '}
                <Button color="success" style={{width: '10em'}}>Logout</Button>{' '}
                <Button color="info" style={{width: '10em'}}>Sign Up</Button>{' '}
            </div>
        );
    }
}

export default Footer;
