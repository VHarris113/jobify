import React from "react";
import Hero from "../components/Hero";
import { Col, Row, Container } from "../components/Grid";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://th.bing.com/th/id/R40360440d8abe1ddc2bd33c517607ea2?rik=6eadjIHNvGbESw&pid=ImgRaw">
        <h1>Jobify</h1>
        <h2>We are here to help you succeed in you job hunt!</h2>
      </Hero>
      <Container>
          <h2 id ="abouttitle">Welcome To Jobify!</h2>
          <b></b>
          <b></b>
            <p>
            </p>
            <b></b>
            <b></b>
            <p>
            At Jobify, our mission is to help people get jobs. We have more than 5 employees passionately pursuing this purpose and improving the recruitment journey through real stories and data. We foster a collaborative workplace that strives to create the best experience for job seekers.
            </p>
            <b></b>
      </Container>

      <Container>
      <h4 id ="abouttitle">We would love to hear from you...</h4>
      <p>
            Need help? or , want to tell us how we are doing?, or just need some help to get some pointers? Just drop us an
            </p>
          <a href="mailto:Wecare@jobify.com?subject=Purpose is Inquiry" target="_top">
          email.</a>
</Container>
    </div>
  );
}

export default About;
