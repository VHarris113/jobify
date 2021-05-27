import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Link, useParams } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
function Welcome() {
  return (
    <Container>
      <a href="/tracker">Link to Job Tracker Page</a>
      <div class="bd-example">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active carousel-item-left">
              <img
                src="https://th.bing.com/th/id/R453366fe634fcd56dffb4cc1d1971a63?rik=tGdAhMMXRJMT%2fQ&riu=http%3a%2f%2fgettinghiredweb.s3.amazonaws.com%2fCommunity%2fBlog+photos%2fJob+Search.jpg&ehk=YhzB4mSDjE%2fEzc%2bqX5zj153rq2gQD8FMR%2b6Mv2TuiaM%3d&risl=&pid=ImgRaw"
                class="d-block w-100"
                alt="..."
              />
              <div
                id="carousel-textbox3"
                class="carousel-caption d-none d-md-block"
              >
                <h1>Take control of your your job hunt.</h1>
                <h6>
                  Organize your job search and discover new opportunities, all
                  in one place.
                </h6>
                <div class="left">
                  <a href="/signup" id="btn-sign-in" class="btn btn-info">
                    sign-up
                  </a>
                </div>
                <div class="left">
                  <a href="/login" id="btn-sign-up" class="btn btn-secondary">
                    login
                  </a>
                </div>
              </div>
            </div>
            <div class="carousel-item carousel-item-next carousel-item-left">
              <img
                src="https://th.bing.com/th/id/Rafa7c522503650f9c1e24b809807cf03?rik=%2fxdcktyne439%2fA&riu=http%3a%2f%2fbuzzsouthafrica.com%2fwp-content%2fuploads%2fFind_Jobs.jpg&ehk=BYdU8DkDJrWgPAlcGY%2ffuJTq03nruz7SO5bjriLK9Hs%3d&risl=&pid=ImgRaw"
                class="d-block w-100"
                alt="..."
              />
              <div
                id="carousel-textbox1"
                class="carousel-caption d-none d-md-block"
              >
                <h1>Job tracking made easy.</h1>
                <h6>We can help keep job search simple.</h6>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://i.ytimg.com/vi/AnYdKPWTBSE/maxresdefault.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div
                id="carousel-textbox2"
                class="carousel-caption d-none d-md-block"
              >
                <h1>Helping you succeed in your job hunt!</h1>
                <h6>
                  Click <a href="/about">about</a> to know more about our
                  mission.
                </h6>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </Container>
  );
}

export default Welcome;
