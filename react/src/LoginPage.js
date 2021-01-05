import React from 'react';




export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            render: 'login-form'
        }
    
        this.forgotPassword = this.forgotPassword.bind(this);    
    }

    forgotPassword() {
        this.setState({
            render: 'forgot-password'
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
                            <i class="fa fa-close close-icon" onClick={this.props.renderDefault}></i>
                        </div>
                    
                        <div class="buttons">
                            <input type="text" placeholder="Enter Email"/>     
                            
                            <div class="password-wrapper">
                                <input type="text" placeholder="Enter Password"/>     
                                <a class="password-option" onClick={this.forgotPassword}><u>Forgot Password?</u></a>
                            </div>

                            <button class="loginbtn" type="submit">Log In</button>
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