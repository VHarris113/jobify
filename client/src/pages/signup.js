import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function login() {
  var axios = require("axios");
  var data = JSON.stringify({
    email: "",
    password: "",
  });

  var config = {
    method: "post",
    url: "http://localhost:3000/api/signup",
    headers: {
      "Content-Type": "application/json",
      Cookie: "",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  return (
    <section class="signup">
      <div class="container">
        <div class="signup-content">
          <div class="signup-form">
            <h2 class="form-title">Sign up</h2>
            <form method="POST" class="register-form" id="register-form">
              <div class="form-group">
                <label for="name">
                  <i class="zmdi zmdi-account material-icons-name"></i>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                />
              </div>
              <div class="form-group">
                <label for="email">
                  <i class="zmdi zmdi-email"></i>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                />
              </div>
              <div class="form-group">
                <label for="pass">
                  <i class="zmdi zmdi-lock"></i>
                </label>
                <input
                  type="password"
                  name="pass"
                  id="pass"
                  placeholder="Password"
                />
              </div>
              <div class="form-group">
                <label for="re-pass">
                  <i class="zmdi zmdi-lock-outline"></i>
                </label>
                <input
                  type="password"
                  name="re_pass"
                  id="re_pass"
                  placeholder="Repeat your password"
                />
              </div>
              <div class="form-group">
                <input
                  type="checkbox"
                  name="agree-term"
                  id="agree-term"
                  class="agree-term"
                />
                <label for="agree-term" class="label-agree-term">
                  <span>
                    <span></span>
                  </span>
                  I agree all statements in{" "}
                  <a href="#" class="term-service">
                    Terms of service
                  </a>
                </label>
              </div>
              <div class="form-group form-button">
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  class="form-submit"
                  value="Register"
                />
              </div>
            </form>
          </div>
          <div class="signup-image">
            <figure>
              <img src="images/signup-image.jpg" alt="sing up image" />
            </figure>
            <a href="#" class="signup-image-link">
              I am already member
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default login;
