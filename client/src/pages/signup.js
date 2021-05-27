import React, { useState } from "react";
import axios from "axios";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function SignUp() {

    const [state, setState] = useState({
        email: "",
        password: ""
      });
    
      const handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;
        console.log(name, value)
        
        // Updating the input's state
        setState({
            ...state, 
          [name]: value
        });
      };
    
     const handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
       axios.post("/api/signup", state)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });
    
        setState({
          email: "",
          password: ""
        });
      };
    
    return (
        <section class="signup">
            <div class="container">
                <div class="signup-content">
                    <div className="signup-form">
                        <h2 class="form-title">Sign up</h2>
                        <form method="POST" class="register-form" id="register-form">
                            <div class="form-group">
                                <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="name" id="name" placeholder="Your Name"/>
                            </div>
                            <div class="form-group">
                                <label for="email"><i class="zmdi zmdi-email"></i></label>
                                <input onChange={e => handleInputChange(e)} type="email" name="email" id="email" placeholder="Your Email"/>
                            </div>
                            <div class="form-group">
                                <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                                <input onChange={e => handleInputChange(e)} type="password" name="password" id="pass" placeholder="Password"/>
                            </div>
                            <div class="form-group">
                                <label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
                                <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password"/>
                            </div>
                            <div class="form-group">
                                <input type="checkbox" name="agree-term" id="agree-term" class="checkbox-effect checkbox-effect-1" />
                                <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <a href="https://www.termsservicetemplate.com/live.php?token=03czSWTdWjGrlr5nOFLMDEJrwzgGqqL9" class="term-service">Terms of service</a></label>
                            </div>
                            <div class="form-group form-button">
                                <input onClick={handleFormSubmit} type="submit" name="signup" id="signup" class="form-submit" value="Register"/>
                            </div>
                        </form>
                    </div>
                    <div class="signup-image">
                        <figure><img src="images/signup-image.jpg" alt="sing up image"/></figure>
                        <a href="/login" class="signup-image-link">I am already member</a>
                    </div>
                </div>
            </div>
        </section>


);
}



export default SignUp;