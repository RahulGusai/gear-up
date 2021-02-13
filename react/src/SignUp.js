import React from 'react';
import axios from 'axios';

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
           signupAttempt:"none"
        }
    
        this.formValidation = {"username":true,"phoneno":true,"password":true};
        this.error={"code":0};

        this.usernameCheck = this.usernameCheck.bind(this);
        this.usernameCheck = this.usernameCheck.bind(this);    
        this.phoneNoCheck = this.phoneNoCheck.bind(this);
        this.pwdCheck = this.pwdCheck.bind(this);    
        this.onSignUp = this.onSignUp.bind(this);
    }

    componentDidUpdate() {
        if (this.state.signupAttempt === "failure") {
            const errorWrapper = document.querySelector(".signup-container .signup-form-container .error"); 
            const erroLabel = document.querySelector(".signup-container .signup-form-container .error .error-label label");
            erroLabel.innerHTML = `Registration failed. Server returned an error code - <b>${this.error["code"]}</b>. Please try again.`;
            errorWrapper.style.borderColor = "red";
        }

        else if(this.state.signupAttempt === "success") {
                const infoWrapper = document.querySelector(".signup-container .signup-form-container .info"); 
                console.log("UPDATED");
                infoWrapper.style.borderColor = "green";
            }
    } 

    showPasswordToggle(e) {
        var x = document.getElementById("password-input");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";                                                                                                                                 
        }
    }
                                                                                                                                                                                                                                    
    componentDidMount() {
    }

    usernameCheck(e) {
        const url = `/user/check/${e.target.value}`
        axios.get(url)
        .then((response) => 
        {
            const availabilityLabel = document.querySelector(".signup-form-container .buttons .username-wrapper label");
            if (response.data["found"]===true){
                this.formValidation["username"]=false;
                availabilityLabel.hidden=false;
                availabilityLabel.style.color="red"
                availabilityLabel.innerHTML="Username not available"
            } 
            else{
                this.formValidation["username"]=true;
                availabilityLabel.hidden=false;
                availabilityLabel.style.color="green"
                availabilityLabel.innerHTML="Username available"
            }
        })    
        .catch((error) => {
            this.formValidation["username"]=false;
            console.log("PROMOISE REJECTED");
            console.log(error.response);
        });

    }

    phoneNoCheck(e) {
        var reg = new RegExp('^[0-9]{10}$');    
        const valid = reg.test(e.target.value);
        this.formValidation["phoneno"]=valid; 
        const errorLabel = document.querySelector(".signup-form-container .buttons .phone-wrapper label");
        if (valid === false){
            errorLabel.hidden=false;
            errorLabel.style.color="red";
        }
        else {
            errorLabel.hidden=true;
        }
    }

    pwdCheck(e) {
        var pwdRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        const valid = pwdRegex.test(e.target.value);
        this.formValidation["password"]=valid;

        const errorLabel = document.querySelector(".signup-form-container .buttons .create-password .invalid-pwd");
        if (valid === false){
            errorLabel.hidden=false;
            errorLabel.style.color="red";
        }
        else {
            errorLabel.hidden=true;
        }
    }

    onSignUp() {
        //Checking if the form is valid or not
        let valid=true;
        Object.keys(this.formValidation).forEach(flag => {
            valid = (valid && this.formValidation[flag]);
        });

        if (valid===false){
            const formError = document.querySelector(".signup-form-container .form-error");  
            formError.hidden=false;
            formError.style.color="red";
        }
        else {
            const username = document.querySelector(".signup-form-container .buttons .username-wrapper input").value;
            const name = document.querySelector(".signup-form-container .buttons input").value;
            const phoneno = document.querySelector(".signup-form-container .buttons .phone-wrapper input").value;
            const email = document.querySelector(".signup-form-container .buttons .email-wrapper input").value;
            const password = document.querySelector(".signup-form-container .buttons .input-wrapper input").value;

            const payload = {"uname":username, "name":name, "phoneno":phoneno, "email":email, "password":password};
            console.log("Sending request to the server");
            axios.post("/user/signup",payload)
            .then((response) => {
                console.log(response);
                if (response.status === 200){
                    this.setState({
                        "signupAttempt":"success"
                    });
                }

            })
            .catch((error) => {
                console.log(error);  
                this.error["code"] = error.response.status;
                this.setState({
                    "signupAttempt":"failure"
                });
            });

        }
    }


    render() {
        if (this.state.signupAttempt === "none"){
            return( 
                <div class="signup-container">
                    <div class="signup-form-container">
                        <div class="topbar">
                            <div class="heading">
                                <label>SignUp</label>
                                <hr class="headingbreak"/>
                            </div>
                            <a href="/"><i class="fa fa-close close-icon" onClick={this.props.renderDefault}></i></a>
                        </div>

                        <div class="buttons">
                            <div class="username-wrapper">
                                <input type="text" onBlur={this.usernameCheck} class="username" placeholder="Username"/>
                                <label hidden="true">Username available</label>
                            </div>
                            
                            <input type="text" placeholder="Name"/>
                            <div class="phone-wrapper">
                                <input type="text" onBlur={this.phoneNoCheck} placeholder="Mobile No."/>
                                <label hidden="true" class="phone-info">Phone number should only contain 10 digits</label> 
                            </div>

                            <div class="email-wrapper">
                            <input type="text" placeholder="Enter Email Id"/>     
                                {/* <label class="password-info">Enter minimum 8 characters with one special character(!,~,$,#,% or &)</label>ec2-52-66-248-198.ap-south-1.compute.amazonaws.com   */}
                            </div>    

                            <div class="create-password">
                                <div class="input-wrapper">
                                    <input id="password-input" onBlur={this.pwdCheck} type="text" type="password" placeholder="Create Password" />
                                    <i class="far fa-eye" id="togglePassword" onClick={this.showPasswordToggle}></i>
                                </div>
                            <label hidden="true" class="invalid-pwd">Invalid password</label>
                            <label class="password-info">Enter minimum 8 characters with atleast one lowercase,one uppercase, one numeric and one special character(!,@,#,$,%,&,*)</label>
                            </div>    

                            <button onClick={this.onSignUp} class="signupbtn" type="submit">Sign Up</button>
                        </div>

                        <label hidden="true" class="form-error">Please correct all the fields.</label>
                    </div>
                </div>
            );      
        }        
    
        else {
                if (this.state.signupAttempt === "success") {
                    return(
                        <div class="signup-container">
                            <div class="signup-form-container">
                                <div class="topbar">
                                        <div class="heading">
                                        <label>SignUp</label>
                                        <hr class="headingbreak"/>
                                    </div>
                                    <a href="/"><i class="fa fa-close close-icon" onClick={this.props.renderDefault}></i></a>
                                </div>
                        
                                <div class="info">
                                    <div class="info-label">
                                        <div class="check"></div>
                                        <label>You have been registered successfully.</label>
                                    </div>

                                    <div class="info-buttons">
                                        <a href="/"><button class="home-page">Home</button></a>
                                        <a href="/login"><button href="/login" class="login-page">Login</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }

                else if (this.state.signupAttempt === "failure") {
                    return(
                        <div class="signup-container">
                            <div class="signup-form-container">
                                <div class="topbar">
                                        <div class="heading">
                                        <label>SignUp</label>
                                        <hr class="headingbreak"/>
                                    </div>
                                    <a href="/"><i class="fa fa-close close-icon" onClick={this.props.renderDefault}></i></a>
                                </div>
                        
                                <div class="error">
                                    <div class="error-label">
                                        <i class="fa fa-exclamation-triangle"></i>
                                        <label></label>
                                    </div>

                                    <div class="error-buttons">
                                        <a href="/"><button class="home-page">Home</button></a>
                                        <a href="/signup"><button href="/login" class="login-page">SignUp</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }



        }    




    }

}