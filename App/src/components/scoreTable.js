import React, {Component} from 'react';
import {Table} from 'reactstrap';
import '../css/main.css';
import PropTypes from "prop-types";

class ScoreTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            '1': 0,
            '2': 0,
            '3': 0,
            '4': 0,
            '5': 0,
            '6': 0,
            '7': 0,
            '8': 0,
            '9': 0,
            '10': 0,
            '10_': 0,

            round_1: 0,
            round_2: 0,
            round_3: 0,
            round_4: 0,
            round_5: 0,
            round_6: 0,

            shots: []
        };

        for(let i = 0; i < 60; i++){
            this.state.shots.push(0);
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.shot !== prevProps.shot){
            this.setState({
                [this.props.score]: this.state[this.props.score] + 1
            });

            this.onUpdateShots(this.props.shot - 1);
            this.onUpdateTotals(this.props.shot, this.props.score);

        }
    }

    onUpdateShots = i => {
        this.setState(state => {
            const shots = state.shots.map((shot, j) => {
                if (j === i) {
                    return this.props.score;
                } else {
                    return shot;
                }
            });
            return {
                shots,
            };
        });
    };

    onUpdateTotals = (shot, score) => {
        if(shot <= 10){
            this.setState({
                round_1: this.state.round_1 + score
            })
        } else if(shot > 10 && shot <= 20){
            this.setState({
                round_2: this.state.round_2 + score
            })
        } else if(shot > 20 && shot <= 30){
            this.setState({
                round_3: this.state.round_3 + score
            })
        } else if(shot > 30 && shot <= 40){
            this.setState({
                round_4: this.state.round_4 + score
            })
        } else if(shot > 40 && shot <= 50){
            this.setState({
                round_5: this.state.round_5 + score
            })
        } else if(shot > 50 && shot <= 60){
            this.setState({
                round_6: this.state.round_6 + score
            })
        }
    };

    render() {
        return (
            <div>
                <Table responsive size="sm">
                    <thead>
                    <tr>
                        <th>Round</th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                        <th>6</th>
                        <th>7</th>
                        <th>8</th>
                        <th>9</th>
                        <th>10</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        {
                           [0,1,2,3,4,5,6,7,8,9].map((e)=>
                               <td key={`round_1_${e}`}>{this.state.shots[e]}</td>
                           )
                        }
                        <td>{this.state.round_1}</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        {
                            [10,11,12,13,14,15,16,17,18,19].map((e)=>
                                <td key={`round_2_${e}`}>{this.state.shots[e]}</td>
                            )
                        }
                        <td>{this.state.round_2}</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        {
                            [20,21,22,23,24,25,26,27,28,29].map((e)=>
                                <td key={`round_3_${e}`}>{this.state.shots[e]}</td>
                            )
                        }
                        <td>{this.state.round_3}</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        {
                            [30,31,32,33,34,35,36,37,38,39].map((e)=>
                                <td key={`round_4_${e}`}>{this.state.shots[e]}</td>
                            )
                        }
                        <td>{this.state.round_4}</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        {
                            [40,41,42,43,44,45,46,47,48,49].map((e)=>
                                <td key={`round_5_${e}`}>{this.state.shots[e]}</td>
                            )
                        }
                        <td>{this.state.round_5}</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        {
                            [50,51,52,53,54,55,56,57,58,59].map((e)=>
                                <td key={`round_6_${e}`}>{this.state.shots[e]}</td>
                            )
                        }
                        <td>{this.state.round_6}</td>
                    </tr>
                    </tbody>
                </Table>
                <hr/>
                <Table responsive size="sm">
                    <thead>
                    <tr>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                        <th>6</th>
                        <th>7</th>
                        <th>8</th>
                        <th>9</th>
                        <th>10</th>
                        <th>10'</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{this.state['1']}</td>
                        <td>{this.state['2']}</td>
                        <td>{this.state['3']}</td>
                        <td>{this.state['4']}</td>
                        <td>{this.state['5']}</td>
                        <td>{this.state['6']}</td>
                        <td>{this.state['7']}</td>
                        <td>{this.state['8']}</td>
                        <td>{this.state['9']}</td>
                        <td>{this.state['10']}</td>
                        <td>{this.state['10_']}</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

ScoreTable.propTypes = {
    shot: PropTypes.number,
    score: PropTypes.number
};

export default ScoreTable;
