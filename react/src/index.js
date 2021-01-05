import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import SignUp from './SignUp';
import AppIndex from './AppIndex';

class LandingIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            render: "landing"
        }

        this.onLoginBtnClick = this.onLoginBtnClick.bind(this);
        this.onSignupBtnClick = this.onSignupBtnClick.bind(this);    
 
        this.renderDefaultState = this.renderDefaultState.bind(this);
    }
 
    onLoginBtnClick() {
        this.setState({
            render: 'login'
        });
    }

    onSignupBtnClick() {
        this.setState({
            render: 'signup'
        });
    }
    

    renderDefaultState() {  
        this.setState({
            render: 'landing'
        });
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
 
    render() {
        if (this.state.render === "landing"){
            return (
               <LandingPage loginClick={this.onLoginBtnClick} signupClick={this.onSignupBtnClick}></LandingPage>    
            );
        }
        
        else if (this.state.render === "login") {
            return (
                <LoginPage renderDefault={this.renderDefaultState}></LoginPage>
            );
        }

        else if (this.state.render === "signup") {
            return (
                <SignUp renderDefault={this.renderDefaultState}></SignUp>
            );
        }
    }
}

ReactDOM.render(
  <AppIndex/>,
  document.getElementById('wrapper')
);