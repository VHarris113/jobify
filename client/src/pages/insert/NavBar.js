import React from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import ReactDOM from 'react-dom';
import Badges from 'react-bootstrap/Badges';
import { Form } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";


function Navbar() {
    return (
       
    <Navbar bg="success">
    <h1>
     <Badge variant="secondary">Wishlist</Badge>
    </h1>
    <h1>
     <Badge variant="dark">Pending</Badge>
    </h1>
    <h1>
     <Badge variant="primary">Denied</Badge>
    </h1>
    <h1>
     <Badge variant="light">Offer</Badge>
    </h1>
  </Navbar>
  
      
    );
}

export default Insert;


