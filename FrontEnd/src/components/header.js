import React, {Component} from 'react';
import { Row, Col, Button } from 'reactstrap';
import Timer from "react-compound-timer";
import PropTypes from 'prop-types';
import '../css/main.css';

class Header extends Component {
    render() {
        return (
            <div className="header-row">
                <br/>
                <Row>
                    <Col className="header-col">
                        <Timer>
                            {({ start, stop, reset }) => (
                                <React.Fragment>
                                    <div className="header-font">
                                        <Timer.Hours /> hour {'- '}
                                        <Timer.Minutes /> min {'- '}
                                        <Timer.Seconds /> sec
                                    </div>
                                    <div>
                                        <Button color="success" onClick={start}>Start</Button>{' '}
                                        <Button color="warning" onClick={stop}>Stop</Button>{' '}
                                        <Button color="danger" onClick={reset}>Reset</Button>
                                    </div>
                                </React.Fragment>
                            )}
                        </Timer>
                    </Col>
                </Row>
                <br/>
                <hr/>
                <br/>
                <Row>
                    <Col className="header-col">
                        <h1>Total Score: {this.props.totalScore}</h1>
                        <h3>Shot: {this.props.shot} &#8680; Score: {this.props.score}</h3>
                    </Col>
                </Row>
                <br/>
                <br/>
            </div>
        );
    }
}

Header.propTypes = {
    shot: PropTypes.number,
    score: PropTypes.number,
    totalScore: PropTypes.number
};

export default Header;
