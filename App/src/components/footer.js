import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';
import {bindActionCreators} from "redux";
import {removeAppToken} from '../ducks/dashboard'
import {connect} from "react-redux";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: null,
            userId: null
        }
    }

    componentDidMount() {
        this.setState({
            token: this.props.token,
            userId: this.props.userId
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.token !== prevProps.token || this.props.userId !== prevProps.userId){
            this.setState({
                token: this.props.token,
                userId: this.props.userId
            });
        }
    }

    render() {
        return (
            <div style={{marginTop: '5em'}}>
                {/*<Link to={'/users'}>*/}
                {/*    <Button color="primary" style={{width: '10em'}}>Users</Button>*/}
                {/*</Link>{' '}{' '}*/}
                <Link to={'/shooters'}>
                    <Button color="warning" style={{width: '10em'}}>Shooters</Button>
                </Link>{' '}{' '}
                <Link to={'/history'}>
                    <Button color="secondary" style={{width: '10em'}}>History</Button>
                </Link>{' '}
                {
                    this.state.token !== null && this.state.userId !== null ?
                        <Link to={'/'}>
                            <Button color="success" style={{width: '10em'}} onClick={() => {
                                this.props.removeAppToken();
                            }}>Logout</Button>{' '}
                        </Link>
                        :
                        ''
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    token: state.dashboard.token,
    userId: state.dashboard.userId
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    removeAppToken
}, dispatch);

Footer = connect(mapStateToProps, mapDispatchToProps)(Footer);

export default Footer;
