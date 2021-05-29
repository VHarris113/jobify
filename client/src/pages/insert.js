import React, { useState } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Form, FormGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button, ButtonGroup } from "react-bootstrap";
import axios from "axios";
import sendMail from "../components/cron";
import {DropdownButton} from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { Component } from 'react';



function Insert() {

  const [state, setState] = useState({
      company: "",
      title: "",
      location: "",
      salary: "",
      url: "",
      applied: "",
      followed: "",
      note: ""
  });

  const handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;
    console.log(name, value)

    setState({
      ...state,
      [name]: value
    });
  };
 

  const handleFormSubmit = event => {
    sendMail()
    event.preventDefault();
    axios.post("/api/tracker", state)
    .then(function(res) {
      console.log(JSON.stringify(res.data));
    })
    .catch(function (err) {
      console.log(err);
    });


    setState({
      company: "",
      title: "",
      location: "",
      salary: "",
      url: "",
      applied: "",
      followed: "",
      note: ""
    });
  };
 
    

  return (
    <Container>

       <div style={{ display: "block", width: 900, padding: 30 }}>
       <h4 >Select your status:</h4>

       </div>
       <div style={{ display: "block", width: 900, padding: 30 }}>
      <Button onClick= {()=> setState ("Wishlist")} variant="outline-info">Wishlist</Button>{" "}
      <Button onClick= {()=> setState ("Pending")} variant="outline-warning">Pending</Button>{" "}
      <Button onClick= {()=> setState ("Denied")} variant="outline-danger">Denied</Button>{" "}
      <Button onClick= {()=> setState ("Offer")} variant="outline-success">Offer</Button>{" "}

      </div>
      <div style={{ display: "block", width: 900, padding: 30 }}>
        <h4> Enter the information requested below:</h4>
      </div>
      <div style={{ display: "block", width: 950, padding: 30 }}>
        <Form>
          <Form.Group>
            <Form.Label></Form.Label>

            <Form.Control onChange={e => handleInputChange(e)} name = "company" type="text" placeholder="Company:" />
          </Form.Group>
          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control onChange={e => handleInputChange(e)} name = "title" type="text" placeholder="Job Title" />
          </Form.Group>
          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control onChange={e => handleInputChange(e)} name = "location " type="text" placeholder="Location" />
          </Form.Group>
          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control onChange={e => handleInputChange(e)} name = "salary" type="number" placeholder="Salary" />

          </Form.Group>
          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control name="url" type="link" placeholder="Listing URL" />
          </Form.Group>
          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control onChange={e => handleInputChange(e)} name = "applied" type="text" placeholder="Date Applied" />
          </Form.Group>
          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control onChange={e => handleInputChange(e)} name = "followed" type="text" placeholder="Follow Up Date" />

          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label></Form.Label>


            <Form.Control value ={useState.Note} name = "note" onChange={e => handleInputChange(e)} as="textarea" rows={4} placeholder="Notes" />

          </Form.Group>
          
          
          <Button variant="outline-primary" href="#/action">Follow up</Button>{' '}
  <Button variant="outline-secondary">No Follow up</Button>{' '}
  <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Follow Up Frequency
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Daily</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Weekly</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Bi-Weekly</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>


      </Form>
     
        
<br/>
        <Button onClick={handleFormSubmit} variant="primary" type="submit">
           Submit Form

        </Button>
      </div>
      
    </Container>
  );
      
}

export default Insert;

