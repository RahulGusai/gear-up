import React from 'react';





export default class SignUp extends React.Component {



    render() {
        <div class="container">
        <div class="formcontainer">
        <h1>SignUp</h1>
        <hr class="headingbreak"/>
        <input type="text" placeholder="Enter Email Id"/>     
        <input type="text" placeholder="Create Password"/>     
        <button class="loginbtn" type="submit">Sign Up</button>

        <label class="orlabel">OR</label>  

        <div class="googlesignup">
            <img class="logo" src="googlelogo.png" width="25px" height="25px"/>
            <label class="google">Continue with Google</label>
        </div>

        <hr class= "linebreak"/>

        <a class="link1"><u>Can't access your account</u>?</a>
        <a class="link2"><u>Create a New Account</u></a>

            </div>
     </div>
    }

}