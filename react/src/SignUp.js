import React from 'react';


export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
    }

    showPasswordToggle(e) {
        var x = document.getElementById("password-input");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
    }

    render() {
        return ( 
            <div class="signup-container">
                <div class="signup-form-container">
                    <div class="topbar">
                        <div class="heading">
                            <h1>SignUp</h1>
                            <hr class="headingbreak"/>
                        </div>
                        <i class="fa fa-close close-icon" onClick={this.props.renderDefault}></i>
                    </div>

                    <div class="buttons">
                        <input type="text" placeholder="Enter Email Id"/>     
                        
                        <div class="create-password">
                            <div class="input-wrapper">
                                <input id="password-input" type="text" type="password" placeholder="Create Password" />
                                <i class="far fa-eye" id="togglePassword" onClick={this.showPasswordToggle}></i>
                            </div>
                           <label class="password-info">Enter minimum 8 characters with one special character(!,~,$,#,% or &)</label>
                        </div>    

                        <button class="loginbtn" type="submit">Sign Up</button>
                    </div>
                </div>
            </div>
        );      
    }

}