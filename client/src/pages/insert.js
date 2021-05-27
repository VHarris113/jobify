import React from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import ReactDOM from "react-dom";
import { Form } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Badge } from "react-bootstrap";

function insert() {
  return (
    <Container>
       <div style={{ display: "block", width: 900, padding: 30 }}>
       <h4 >Select your status:</h4>
       </div>
       <div style={{ display: "block", width: 900, padding: 30 }}>
      <Button variant="outline-primary">Wishlist</Button>{" "}
      <Button variant="outline-secondary">Pending</Button>{" "}
      <Button variant="outline-success">Denied</Button>{" "}
      <Button variant="outline-warning">Offer</Button>{" "}
      </div>
      <div style={{ display: "block", width: 900, padding: 30 }}>
       <h4> Enter the information requested below:</h4>
       </div>
      <div style={{ display: "block", width: 950, padding: 30 }}>
    
        <Form>
          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control type="text" placeholder="Company:" />
          </Form.Group>
          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control type="text" placeholder="Job Title:" />
          </Form.Group>
          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control type="text" placeholder="Location:" />
          </Form.Group>
          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control type="number" placeholder="Salary:" />
          </Form.Group>
          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control type="text" placeholder="Listing URL:" />
          </Form.Group>
          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control type="text" placeholder="Date Applied:" />
          </Form.Group>
          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control type="text" placeholder="Follow Up Date:" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label></Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Notes:" />
          </Form.Group>
        </Form>
<br/>
        <Button variant="primary" type="submit">
           Submit Form
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
