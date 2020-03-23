import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <Row style={{marginBottom: '4em'}}>
                <Col><h1>freETarget</h1></Col>
            </Row>
        );
    }
}

export default Header;
