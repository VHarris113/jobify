
import React, { Component } from 'react';
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function Welcome() {
    return (
        <Container fluid>
        <Row> 
        <Col size="md-12">
            
        <Jumbotron>

        <Carousel>
                <div>
                    <img src="https://th.bing.com/th/id/Rf6fa29c13a30b7745a67db688219cf4a?rik=hxeaXSw6XjrcIw&riu=http%3a%2f%2fwww.dreamjobcoaching.com%2fwp-content%2fuploads%2f2014%2f09%2f9-step-job-searching-program.jpg&ehk=2jMp5Apvvwe3Odl6Z%2fFTNUT2EucKCV4RqSOHTQrK%2f28%3d&risl=&pid=ImgRaw"  />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://static.vecteezy.com/system/resources/previews/000/169/246/original/job-search-vector-design.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://th.bing.com/th/id/Rd0186f4538e6f3685c08603f48b2376b?rik=o0CTGBkRylWhVw&pid=ImgRaw" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            <div class="container bg-secondary border border-dark rounded">
                <div class="signup-content">
                    <div class="signup-form ">
                        <h1>Take control of your your job hunt.</h1> 
                        <p>Organize your job search and 
discover new opportunities, all in one 
place. <a href="https://www.w3schools.com/">click her to learn more ...</a></p> 
                    </div>
                    
                    <div class="signup-image">
                        <a href="/signup" class="btn btn-info">Sign-up</a>
                    </div>
                    <div class="signin-image">
                        <a href="/login" class="btn btn-secondary">Login</a>
                    </div>
                </div>
            </div>

        </Jumbotron>
        </Col>
      </Row>
    </Container>
);
}



export default Welcome;