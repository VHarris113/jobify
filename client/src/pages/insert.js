import React from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import ReactDOM from 'react-dom';
import { Form } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import {FormControl} from "react-bootstrap";
import {Button} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import {Badge} from "react-bootstrap";

function insert() {
    return (
      <Container>
      
        <div className="row">
      <div className="badge col md-1">
                <button  id= "wishlist-insert" style={{ width: 120, height: 120 }} type="button" class="btn ">
                Wishlist<span class="badge badge-secondary"> 1</span>
                </button>
            </div>
            <div className="badge col md-1">
                <button id= "pending-insert"   style={{ width: 120, height: 120 }} type="button" class="btn ">
                  Pending <span class="badge badge-secondary"> 3</span>
                </button>
            </div>
            <div  className="badge col md-1">
                <button  id= "denied-insert"  style={{ width: 120, height:120 }} type="button" class="btn ">
                  Denied <span class="badge badge-secondary"> 3</span>
                </button>
            </div>
            <div className="badge col md-1">
                <button  id= "offer-insert"   style={{ width: 120, height: 120 }} type="button" class="btn ">
                  Offer <span class="badge badge-secondary"> 3</span>
                </button>
            </div>
            </div>
            
    

      <div>

  <InputGroup size="sm" className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-sm">Company</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>
  <br />
  <InputGroup size="sm" className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-sm">Job Title</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>
  <br />
  <InputGroup size="sm" className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-sm">Location</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>
  <br />
  <InputGroup size="sm" className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-sm">Salary</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>
  <br />
  <InputGroup size="sm" className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-sm">Listing URL</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>
  <br />
  <InputGroup size="sm" className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-sm">Date Applied</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>
  <br />
  <InputGroup size="sm" className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-sm">Follow Up</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>
  <br />
  <InputGroup>
    <InputGroup.Prepend>
      <InputGroup.Text>Note</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl as="textarea" aria-label="With textarea" />
  </InputGroup>
  </div>
</Container>


        );
    }
    
    export default insert;