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
         
            <div style={{ display: 'block', 
                  width: 700, 
                  padding: 30 }}>
      <h4>Select your status and enter the information requested below</h4>
      <Form>
      <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control type="text" 
                        placeholder="Company:" />
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control type="text" 
                        placeholder="Job Title" />
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control type="text" placeholder="Location" />
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control type="number" 
                        placeholder="Salary" />
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control type="text" placeholder="Listing URL" />
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control type="text" 
                        placeholder="Date Applied" />
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control type="text" placeholder="Follow Up Date" />
        </Form.Group>
      
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Note</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>

<Button variant="primary" type="submit">
Click here to submit form
</Button>

</div>


{/* <div className="container">
<div class="form-floating">
<textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
<label for="floatingTextarea">Comments</label>
</div>
  </div>          */}
  
</Container> 


        );
    }   
    
    export default insert;