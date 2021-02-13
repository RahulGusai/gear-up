import React from 'react';
import axios from 'axios';

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            render: 'login-form'
        }
    
        this.forgotPassword = this.forgotPassword.bind(this);    
        this.loginBtnClick = this.loginBtnClick.bind(this);
    }


    forgotPassword() {
        this.setState({
            render: 'forgot-password'
        });
    }

    loginBtnClick(e) {
        e.preventDefault();

        // Verify credentials by sending request to the server
        const emailId = document.querySelector(".login-container .login-form-container .buttons .email-input").value;
        const password = document.querySelector(".login-container .login-form-container .buttons .password-wrapper input").value;
        const payload = {"emailid":emailId, "password":password};
        
        console.log("Sending request to the server");
        axios.post("/user/login",payload)
        .then((response) => {
            if (response.status === 200){
                this.props.setLoginState(response.data["token"],response.data["refresh"]);
            }
            else {
                console.log("Invalid credentials");
                // Error handling dialog
            }

        })
        .catch((error) => {
            console.log(error.response);
            console.log("PROMISE GOT REJECTED");
            // Error handling dialog
        });
    
    
    }

    render() {
       if (this.state.render === "login-form") {       
            return ( 
                <div class="login-container">
                    <div class="login-form-container">
                    
                        <div class="topbar">
                            <div class="heading">
                                <h1>LOGIN</h1>
                                <hr class="headingbreak"/>
                            </div>
                            <a href="/"><i class="fa fa-close close-icon"></i></a>
                        </div>
                    
                        <div class="buttons">
                            <input class="email-input" type="text" placeholder="Enter Email"/>     
                            
                            <div class="password-wrapper">
                                <input type="text" placeholder="Enter Password"/>     
                                <a class="password-option" onClick={this.forgotPassword}><u>Forgot Password?</u></a>
                            </div>

                            <button onClick={this.loginBtnClick} class="loginbtn" type="submit">Log In</button>
                        </div>
                        
                        <div class="third-party">    
                            <label class="orlabel">OR</label>  
                    
                            <button class="google-btn">
                                <img class="logo" src="googlelogo.png" width="25px" height="25px"/>
                                <label class="google">Continue with Google</label>
                            </button>
                        </div>

                        <div class="options">
                            <hr class= "linebreak"/>
                            <a class="link1"><u>Can't access your account</u>?</a>
                            <a class="link2"><u>Create a New Account</u></a>
                        </div>
                    </div>
                </div>
            );  
        }

        else if (this.state.render === "forgot-password") {
            return (
                <div class="forgot-pwd-container">
                    <div class="forgot-pwd-form">
                        <div class="topbar">
                            <div class="heading">
                                <h1>Forgot Password</h1>
                                <hr class="headingbreak"></hr>
                                
                            </div>
                            <i class="fa fa-close close-icon" onClick={this.props.renderDefault}></i>
                        </div>

                        <div class="buttons">
                            <input type="text" placeholder="Enter your Email Id"/>     
                            <button class="loginbtn" type="submit">Submit</button>
                        </div>
                    </div>
                </div>
            );
        }
    }
}