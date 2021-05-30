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

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };
 

  const handleFormSubmit = event => {
    sendMail()
    event.preventDefault();
    if (!this.state.firstName || !this.state.lastName) {
      alert("Fill out your first and last name please!");
    } else if (this.state.password.length < 6) {
      alert(
        `Choose a more secure password ${this.state.firstName} ${this.state
          .lastName}`
      );
    } else {
      alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    }

    this.setState({
      firstName: "",
      lastName: "",
      password: ""
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


// <Link to={`${props.match.url}/learn`} role="button" className="btn btn-link">
// Learn More
// </Link>{" "}
// <Link to="/contact" role="button" className="btn btn-link">
// Learn Less
// </Link>
// <Route exact path={`${props.match.url}/learn`} component={Learn} />

export default Form;