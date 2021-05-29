import React, { Component } from "react";
import API from "utils/API";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import ReactDOM, { render } from "react-dom";
import { Form } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Badge } from "react-bootstrap";
import axios from "axios";

class Job extends Component {
  state = {
    job: [],
  };

  componentDidMount() {
    this.getSavedJobs();
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  getSavedJobs = () => {
    API.getSavedJobs()
      .then((res) =>
        this.setState({
          job: res.data,
        })
      )
      .catch((err) => console.log(err));

    return (
      <Container>
        <div style={{ display: "block", width: 900, padding: 30 }}>
          <h4>Select your status:</h4>
        </div>
        <div style={{ display: "block", width: 900, padding: 30 }}>
          <Button
            onClick={() => setState("Wishlist")}
            variant="outline-primary"
          >
            Wishlist
          </Button>{" "}
          <Button
            onClick={() => setState("Pending")}
            variant="outline-secondary"
          >
            Pending
          </Button>{" "}
          <Button onClick={() => setState("Denied")} variant="outline-success">
            Denied
          </Button>{" "}
          <Button onClick={() => setState("Offer")} variant="outline-warning">
            Offer
          </Button>{" "}
        </div>
        <div style={{ display: "block", width: 900, padding: 30 }}>
          <h4> Enter the information requested below:</h4>
        </div>
        <div style={{ display: "block", width: 950, padding: 30 }}>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label></Form.Label>

              <Form.Control
                required
                onChange={jobUpdate}
                name="company"
                type="text"
                placeholder="Company:"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label></Form.Label>
              <Form.Control
                required
                onChange={jobUpdate}
                name="title"
                type="text"
                placeholder="Job Title"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label></Form.Label>
              <Form.Control
                required
                onChange={jobUpdate}
                name="location "
                type="text"
                placeholder="Location"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label></Form.Label>
              <Form.Control
                required
                onChange={jobUpdate}
                name="salary"
                type="number"
                placeholder="Salary"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label></Form.Label>
              <Form.Control
                onChange={jobUpdate}
                name="url"
                type="link"
                placeholder="Listing URL"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label></Form.Label>
              <Form.Control
                required
                onChange={jobUpdate}
                name="applied"
                type="text"
                placeholder="Date Applied"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label></Form.Label>
              <Form.Control
                required
                onChange={jobUpdate}
                name="followed"
                type="text"
                placeholder="Follow Up Date"
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label></Form.Label>

              <Form.Control
                value={useState.Note}
                name="note"
                onChange={(e) => handleInputChange(e)}
                as="textarea"
                rows={4}
                placeholder="Notes"
              />
            </Form.Group>
          </Form>
          <br />
          <Button type="submit" variant="primary" type="submit">
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
  };
}

export default Job;
