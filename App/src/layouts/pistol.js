import React, {Component} from 'react';
import {Row, Col, Container, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import TargetHeader from "../components/targetHeader";
import PistolTarget from "../components/targets/pistol";
import ScoreTable from "../components/scoreTable";
import '../css/main.css';

class Pistol extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalScore: 0,
            shot: 0,
            score: 0,
            x: 0,
            y: 0
        };
    }

    componentDidMount() {

        let { shooterId } = this.props.match.params;
        console.log(shooterId);

        const intervalId = setInterval(() => {

            // data from sensor
            // const x = (Math.random() * (7.75 - (-7.75)) + (-7.75)).toFixed(4);
            // const y = (Math.random() * (7.75 - (-7.75)) + (-7.75)).toFixed(4);
            const x = (Math.random() * (1.5 - (-1.5)) + (-1.5)).toFixed(4);
            const y = (Math.random() * (1.5 - (-1.5)) + (-1.5)).toFixed(4);
            const r = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

            let score = 0;
            if (r < 0.70) {
                score = 10
            } else if (r <= 1.65 && r >= 0.55) {
                score = 9
            } else if (r <= 2.40 && r >= 1.35) {
                score = 8
            } else if (r <= 3.20 && r >= 2.15) {
                score = 7
            } else if (r <= 4.00 && r >= 2.95) {
                score = 6
            } else if (r <= 4.80 && r >= 3.75) {
                score = 5
            } else if (r <= 5.60 && r >= 4.55) {
                score = 4
            } else if (r <= 6.40 && r >= 5.35) {
                score = 3
            } else if (r <= 7.20 && r >= 6.15) {
                score = 2
            } else if (r <= 8.00 && r >= 6.95) {
                score = 1
            }

            console.log('x:' + x + " y:" + y + " r:" + r + " score:" + score);


            this.setState({
                totalScore: this.state.totalScore + score,
                shot: this.state.shot + 1,
                score: score,
                x: (345.5 * x / 7.75) + 335,
                y: 335 - (345.5 * y / 7.75)
            });
            if (this.state.shot === 60) {
                clearInterval(this.state.intervalId);
            }
        }, 4000);
        this.setState({intervalId: intervalId});
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    render() {
        return (
            <Container className="themed-container" fluid={true}>
                <Button className="print-button" color="info" size="sm" onClick={() => window.print()}>PRINT</Button>
                <Link to="/">
                    <Button className="back-button" color="info" size="sm">Back</Button>
                </Link>
                <Row>
                    <Col xs="6">
                        <PistolTarget shot={{x: this.state.x, y: this.state.y}}/>
                    </Col>
                    <Col xs="6">
                        <TargetHeader totalScore={this.state.totalScore} shot={this.state.shot} score={this.state.score}/>
                        <ScoreTable shot={this.state.shot} score={this.state.score}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Pistol;
