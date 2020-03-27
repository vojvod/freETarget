import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';

class Footer extends Component {
    render() {
        return (
            <div style={{marginTop: '5em'}}>
                <Link to={'/users'}>
                    <Button color="primary" style={{width: '10em'}}>Users</Button>
                </Link>{' '}{' '}
                <Link to={'/shooters'}>
                    <Button color="warning" style={{width: '10em'}}>Shooters</Button>
                </Link>{' '}{' '}
                <Link to={'/history'}>
                    <Button color="secondary" style={{width: '10em'}}>History</Button>
                </Link>{' '}
                <Button color="success" style={{width: '10em'}}>Logout</Button>{' '}
            </div>
        );
    }
}

export default Footer;
