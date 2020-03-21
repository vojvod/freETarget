import React, {Component} from 'react';
import {Circle} from 'react-shapes';
import '../../css/main.css';

class PistolTarget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            no: 1,
            shots: []
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.shot.x !== prevProps.shot.x || this.props.shot.y !== prevProps.shot.y){
            let shots = this.state.shots;
            shots.push(<div key={`shot_${Math.floor(this.props.shot.x)}_${Math.floor(this.props.shot.y)}`} style={{position: "absolute", top: `${this.props.shot.y}px`, left: `${this.props.shot.x}px`}}>
                <Circle r={10} fill={{color: '#ff0c0e'}} stroke={{color: '#377d88'}} strokeWidth={1}/>
                {
                    this.state.no > 9
                        ?
                        <span style={{position: 'absolute', left: '3.5px', top: '3px', fontSize: 'smaller'}}>{this.state.no}</span>
                        :
                        <span style={{position: 'absolute', left: '6.5px', top: '3px', fontSize: 'smaller'}}>{this.state.no}</span>
                }
            </div>);
            this.setState({
                no: this.state.no + 1,
                shots: shots
            });
        }
    }

    render() {
        return (
            <div style={{textAlign: "center", position: "relative", margin: "10px"}}>

                <div style={{position: "absolute", top: "0px", left: "0px"}}>
                    <Circle r={345.5} fill={{color: '#efdbc3'}} stroke={{color: '#000000'}} strokeWidth={1}/>
                </div>
                <div style={{position: "absolute", top: "35px", left: "35px"}}>
                    <Circle r={310} fill={{color: '#efdbc3'}} stroke={{color: '#000000'}} strokeWidth={1}/>
                </div>
                <div style={{position: "absolute", top: "70px", left: "70px"}}>
                    <Circle r={275} fill={{color: '#efdbc3'}} stroke={{color: '#000000'}} strokeWidth={1}/>
                </div>
                <div style={{position: "absolute", top: "105px", left: "105px"}}>
                    <Circle r={240} fill={{color: '#efdbc3'}} stroke={{color: '#000000'}} strokeWidth={1}/>
                </div>
                <div style={{position: "absolute", top: "140px", left: "140px"}}>
                    <Circle r={205} fill={{color: '#efdbc3'}} stroke={{color: '#000000'}} strokeWidth={1}/>
                </div>
                <div style={{position: "absolute", top: "175px", left: "175px"}}>
                    <Circle r={170} fill={{color: '#efdbc3'}} stroke={{color: '#000000'}} strokeWidth={1}/>
                </div>
                <div style={{position: "absolute", top: "210px", left: "210px"}}>
                    <Circle r={135} fill={{color: '#000000'}} stroke={{color: '#ffffff'}} strokeWidth={1}/>
                </div>
                <div style={{position: "absolute", top: "245px", left: "245px"}}>
                    <Circle r={100} fill={{color: '#000000'}} stroke={{color: '#ffffff'}} strokeWidth={1}/>
                </div>
                <div style={{position: "absolute", top: "280px", left: "280px"}}>
                    <Circle r={65} fill={{color: '#000000'}} stroke={{color: '#ffffff'}} strokeWidth={1}/>
                </div>
                <div style={{position: "absolute", top: "320px", left: "320px"}}>
                    <Circle r={25} fill={{color: '#000000'}} stroke={{color: '#ffffff'}} strokeWidth={1}/>
                </div>
                <div style={{position: "absolute", top: "333.75px", left: "333.75px"}}>
                    <Circle r={12} fill={{color: '#000000'}} stroke={{color: '#ffffff'}} strokeWidth={1}/>
                </div>

                <div style={{position: "absolute", top: "330px", left: "15px"}}>1</div>
                <div style={{position: "absolute", top: "330px", left: "50px"}}>2</div>
                <div style={{position: "absolute", top: "330px", left: "85px"}}>3</div>
                <div style={{position: "absolute", top: "330px", left: "120px"}}>4</div>
                <div style={{position: "absolute", top: "330px", left: "155px"}}>5</div>
                <div style={{position: "absolute", top: "330px", left: "190px"}}>6</div>
                <div style={{position: "absolute", top: "330px", left: "225px", color: 'white'}}>7</div>
                <div style={{position: "absolute", top: "330px", left: "260px", color: 'white'}}>8</div>

                <div style={{position: "absolute", top: "330px", left: "667.5px"}}>1</div>
                <div style={{position: "absolute", top: "330px", left: "632.5px"}}>2</div>
                <div style={{position: "absolute", top: "330px", left: "597.5px"}}>3</div>
                <div style={{position: "absolute", top: "330px", left: "562.5px"}}>4</div>
                <div style={{position: "absolute", top: "330px", left: "527.5px"}}>5</div>
                <div style={{position: "absolute", top: "330px", left: "492.5px"}}>6</div>
                <div style={{position: "absolute", top: "330px", left: "457.5px", color: 'white'}}>7
                </div>
                <div style={{position: "absolute", top: "330px", left: "422.5px", color: 'white'}}>8
                </div>

                <div style={{position: "absolute", top: "5px", left: "340px"}}>1</div>
                <div style={{position: "absolute", top: "40px", left: "340px"}}>2</div>
                <div style={{position: "absolute", top: "75px", left: "340px"}}>3</div>
                <div style={{position: "absolute", top: "110px", left: "340px"}}>4</div>
                <div style={{position: "absolute", top: "145px", left: "340px"}}>5</div>
                <div style={{position: "absolute", top: "180px", left: "340px"}}>6</div>
                <div style={{position: "absolute", top: "215px", left: "340px", color: 'white'}}>7</div>
                <div style={{position: "absolute", top: "250px", left: "340px", color: 'white'}}>8</div>

                <div style={{position: "absolute", top: "660px", left: "340px"}}>1</div>
                <div style={{position: "absolute", top: "625px", left: "340px"}}>2</div>
                <div style={{position: "absolute", top: "590px", left: "340px"}}>3</div>
                <div style={{position: "absolute", top: "555px", left: "340px"}}>4</div>
                <div style={{position: "absolute", top: "520px", left: "340px"}}>5</div>
                <div style={{position: "absolute", top: "485px", left: "340px"}}>6</div>
                <div style={{position: "absolute", top: "450px", left: "340px", color: 'white'}}>7</div>
                <div style={{position: "absolute", top: "415px", left: "340px", color: 'white'}}>8</div>

                {
                    this.state.shots.map((e, i)=>{
                        let s = '';
                        if(i !== this.state.shots.length - 1){
                            e.props.children[0].props.fill.color = 'white';
                            s = e;
                        }
                        return s
                    })
                }

                {
                    this.state.shots.map((e, i)=>{
                        let s = '';
                        if(i === this.state.shots.length - 1){
                            s = this.state.shots[this.state.shots.length - 1];
                        }
                        return s
                    })
                }

            </div>
        );
    }
}

export default PistolTarget;
