import React, { useEffect, useState } from "react";
import axios from "axios";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import API from "utils/API";
import { set } from "mongoose";

function Login() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;
    console.log(name, value);
    // Updating the input's state
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    axios
      .post("/api/login", state)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    setState({
      email: "",
      password: "",
    });
  };
  return (
    <section class="sign-in">
      <div class="container">
        <div class="signin-content">
          <div class="signin-image">
            <figure>
              <img src="images/signin-image.jpg" alt="sing up image" />
            </figure>
            <a href="#" class="signup-image-link">
              Create an account
            </a>
          </div>
          <div class="signin-form">
            <h2 class="form-title">Log In</h2>
            <form method="POST" class="register-form" id="login-form">
              <div class="form-group">
                <label for="your_name">
                  <i class="zmdi zmdi-account material-icons-name"></i>
                </label>
                <input
                  onChange={(e) => handleInputChange(e)}
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                />
              </div>
              <div class="form-group">
                <label for="your_pass">
                  <i class="zmdi zmdi-lock"></i>
                </label>
                <input
                  onChange={(e) => handleInputChange(e)}
                  type="password"
                  name="password"
                  id="your_pass"
                  placeholder="Password"
                />
              </div>
              <div class="form-group">
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  class="agree-term"
                />
                <label for="remember-me" class="label-agree-term">
                  <span>
                    <span></span>
                  </span>
                  Remember me
                </label>
              </div>
              <div class="form-group form-button">
                <input
                  onClick={handleFormSubmit}
                  type="submit"
                  name="signin"
                  id="signin"
                  class="form-submit"
                  value="Log in"
                />
              </div>
            </form>
            <div class="social-login">
              <span class="social-label">Or login with</span>
              <ul class="socials">
                <li>
                  <a href="#">
                    <i class="display-flex-center zmdi zmdi-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="display-flex-center zmdi zmdi-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="display-flex-center zmdi zmdi-google"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Login;
