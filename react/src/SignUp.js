import React from 'react';
import axios from 'axios';

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.usernameCheck = this.usernameCheck.bind(this)
        
        this.formValidation = {"username":false,"phoneno":false,"password":false};
        this.SignUpAttempt = "none";

        this.usernameCheck = this.usernameCheck.bind(this);    
        this.phoneNoCheck = this.phoneNoCheck.bind(this);
        this.pwdCheck = this.pwdCheck.bind(this);    
        this.onSignUp = this.onSignUp.bind(this);
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
        // const username = document.querySelector(".signup-form-container .buttons .username")
        // username.addEventListener('input',this.usernameCheck)     
               

    
    }

    usernameCheck(e) {
        const url = `/user/check/${e.target.value}`
        axios.get(url)
        .then((response) => 
        {
            const availabilityLabel = document.querySelector(".signup-form-container .buttons .username-wrapper label");
            console.log(availabilityLabel);
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
        const valid = reg.test(e.target.value)
        this.formValidation["phoneno"]=valid; 
        const errorLabel = document.querySelector(".signup-form-container .buttons .phone-wrapper label");
        if (valid === false){
            errorLabel.hidden=false;
            console.log(errorLabel);
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
            console.log(errorLabel);
            errorLabel.style.color="red";
        }
        else {
            errorLabel.hidden=true;
        }
    }

    onSignUp() {
        //Checking if the form is valid or not
        console.log(this.formValidation);
        let valid=true;
        Object.keys(this.formValidation).forEach(flag => {
            valid = (valid && this.formValidation[flag]);
        });
        console.log(valid);

        if (valid===false){
            console.log("FORM IS INVALID");
        }
        else {
            console.log("FORM IS VALID");
        }

    }


    render() {
        if (this.SignUpAttempt === "none"){
            return ( 
                <div class="signup-container">
                    <div class="signup-form-container">
                        <div class="topbar">
                            <div class="heading">
                                <h1>SignUp</h1>
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

                            {/* <div class="email-wrapper"> */}
                            <input type="text" placeholder="Enter Email Id"/>     
                                {/* <label class="password-info">Enter minimum 8 characters with one special character(!,~,$,#,% or &)</label>ec2-52-66-248-198.ap-south-1.compute.amazonaws.com   */}
                            {/* </div>     */}

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
                    </div>
                </div>
            );      
        }        
    
        else {
            <div class="signup-sontainer">
                <div class="successfull-signup">
                    <div class="check"></div>

                    <div class="buttons">
                        <button class="home-page"></button>
                        <button class="login-page"></button>
                    </div>
                </div>
            </div>

        }    




    }

}