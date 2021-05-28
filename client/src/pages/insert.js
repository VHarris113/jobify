import React, { useState } from "react";
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

export const AddJob = () => {

  var [job, setJob] = useState()

  const jobUpdate = (event) => {
    setJob(event.target.value)
  }

  const handleSubmit = () => {
    const postURL = "http://localhost:3001/api/insert"
    fetch(postURL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userID: String,
        company: String,
        jobTitle: job,
        salary: String,
        listingUrl: String,
        dateApplied: Date,
        followUpDate: Date,
        notes: String
      })
    })
    .then(() => {
      alert("Job added to system!");
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Job Title:</label>
        <input required onChange={jobUpdate}></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default AddJob;

// const [state, setState] = useState({
//   //     company: "",
//   //     title: "",
//   //     location: "",
//   //     salary: "",
//   //     url: "",
//   //     applied: "",
//   //     followed: "",
//   //     note: ""
//   // });
//   handleFormSubmit() {
//     let dataBody = {
//       "company": this.state.companyIn,
//       "title": this.state.titleIn,
//       // location: "",
//       // salary: "",
//       // url: "",
//       // applied: "",
//       // followed: "",
//       // note: ""
//   }
//   return fetch("http://localhost:3000/stored", {
//     method: "POST",
//     body: JSON.stringify(dataBody),
//     headers: {
//       "Content-Type": "application/json"
//     },
//   })
//   .then(res => res.json())
//   .then(data => console.log(data))
// }

// render() {
//   return (
//     <Container>
//        <div style={{ display: "block", width: 900, padding: 30 }}>
//        <h4 >Select your status:</h4>
//        </div>
//        <div style={{ display: "block", width: 900, padding: 30 }}>
//       <Button onClick= {()=> setState ("Wishlist")} variant="outline-primary">Wishlist</Button>{" "}
//       <Button onClick= {()=> setState ("Pending")} variant="outline-secondary">Pending</Button>{" "}
//       <Button onClick= {()=> setState ("Denied")} variant="outline-success">Denied</Button>{" "}
//       <Button onClick= {()=> setState ("Offer")} variant="outline-warning">Offer</Button>{" "}

//       </div>
//       <div style={{ display: "block", width: 900, padding: 30 }}>
//         <h4> Enter the information requested below:</h4>
//       </div>
//       <div style={{ display: "block", width: 950, padding: 30 }}>
//         <Form>
//           <Form.Group>
//             <Form.Label></Form.Label>

//             <Form.Control onChange={e => handleInputChange(e)} name = "company" type="text" placeholder="Company:" />
//           </Form.Group>
//           <Form.Group>
//             <Form.Label></Form.Label>
//             <Form.Control onChange={e => handleInputChange(e)} name = "title" type="text" placeholder="Job Title" />
//           </Form.Group>
//           <Form.Group>
//             <Form.Label></Form.Label>
//             <Form.Control onChange={e => handleInputChange(e)} name = "location " type="text" placeholder="Location" />
//           </Form.Group>
//           <Form.Group>
//             <Form.Label></Form.Label>
//             <Form.Control onChange={e => handleInputChange(e)} name = "salary" type="number" placeholder="Salary" />

//           </Form.Group>
//           <Form.Group>
//             <Form.Label></Form.Label>
//             <Form.Control name="url" type="link" placeholder="Listing URL" />
//           </Form.Group>
//           <Form.Group>
//             <Form.Label></Form.Label>
//             <Form.Control onChange={e => handleInputChange(e)} name = "applied" type="text" placeholder="Date Applied" />
//           </Form.Group>
//           <Form.Group>
//             <Form.Label></Form.Label>
//             <Form.Control onChange={e => handleInputChange(e)} name = "followed" type="text" placeholder="Follow Up Date" />

//           </Form.Group>
//           <Form.Group controlId="exampleForm.ControlTextarea1">
//             <Form.Label></Form.Label>


//             <Form.Control value ={useState.Note} name = "note" onChange={e => handleInputChange(e)} as="textarea" rows={4} placeholder="Notes" />

//           </Form.Group>
//         </Form>
// <br/>
//         <Button onClick={handleFormSubmit} variant="primary" type="submit">
//            Submit Form

//         </Button>
//       </div>
//       {/* <div className="container">
// <div class="form-floating">
// <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
// <label for="floatingTextarea">Comments</label>
// </div>
//   </div>          */}
//     </Container>
//   );
// }
// }


  
// // }

// export default Insert;

