import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import SignUp from './SignUp';
import AppIndex from './AppIndex';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocationk
  } from "react-router-dom";

class LandingIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            render: "landing",
            loggedIn: false
        }

        this.setLoginState = this.setLoginState.bind(this);
        this.onSignupBtnClick = this.onSignupBtnClick.bind(this);    
        this.renderDefaultState = this.renderDefaultState.bind(this);
    }
 
    setLoginState() {
        this.setState({
            loggedIn: true
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
        if (this.state.loggedIn===false){
            return(
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <LandingPage loginClick={this.onLoginBtnClick} signupClick={this.onSignupBtnClick}></LandingPage>           
                        </Route>
                        
                        <Route path="/login">
                            <LoginPage renderDefault={this.renderDefaultState} setLoginState={this.setLoginState}></LoginPage>
                        </Route>
                        
                        <Route path="/signup">
                            <SignUp renderDefault={this.renderDefaultState}></SignUp>
                        </Route>

                        <Route path="/">
                            <Redirect to="/"/> 
                        </Route>
                    
                    </Switch>
                </Router>
            );    
    }
        else {
            return(
                <Router>
                    <Switch>
                        <Route exact path="/home">
                            <AppIndex></AppIndex>
                        </Route>
                        
                        <Route path="/">
                            <Redirect to="/home"/> 
                        </Route>

                    </Switch>
                </Router>
            );
        }            
        
    }
}

ReactDOM.render(
  <LandingIndex/>,
  document.getElementById('wrapper')
);