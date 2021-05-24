import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import "./style.css";
function Tracker(props) {
 // const [book, setBook] = useState({})

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
//   const {id} = useParams()
//   useEffect(() => {
//     API.getBook(id)
//       .then(res => setBook(res.data))
//       .catch(err => console.log(err));
//   }, [])

  return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>

            <div  className="row">
            <div className="badge col md-1">
                <button  id= "wishlist" style={{ width: 200, height: 200 }} type="button" class="btn ">
                Wishlist<span class="badge badge-secondary"> 1</span>
                </button>
            </div>
            <div className="badge col md-1">
                <button id= "pending"   style={{ width: 200, height: 200 }} type="button" class="btn ">
                  Pending <span class="badge badge-secondary"> 3</span>
                </button>
            </div>
            <div  className="badge col md-1">
                <button  id= "denied"  style={{ width: 200, height: 200 }} type="button" class="btn ">
                  Denied <span class="badge badge-secondary"> 3</span>
                </button>
            </div>
            <div className="badge col md-1">
                <button  id= "offer"   style={{ width: 200, height: 200 }} type="button" class="btn ">
                  Offer <span class="badge badge-secondary"> 3</span>
                </button>
            </div>
            </div>

              <Col size="md-12 md-offset-1">
              <div id = "addbtn" class="text-right">
                <button type="button" class="btn ">Add Job</button>
            </div>
              <table class="table table-striped">
  <thead>
    <tr>

    </tr>
  </thead>
  <tbody>
    <tr>
      <td className = "text-left" >
      <h2>Developer</h2>
      <h6>Dell</h6>
      </td>
      <td className = "text-right" >
      <div  className="row">
            <div className="col md-3">
            <button id ="gridedit"  type="button" class="btn">edit</button>
            </div>
            <div >
            <button  id ="griddelete"  type="button" class="btn">delete</button>
            </div>
        </div>
      </td>
    </tr>
    <tr>
      <td className = "text-left" >
      <h2>Sr. Developer</h2>
      <h6>Infor</h6>
      </td>
      <td className = "text-right" >
      <div  className="row">
            <div className="col md-3">
            <button id ="gridedit"    type="button" class="btn">edit</button>
            </div>
            <div >
            <button id ="griddelete" type="button" class="btn">delete</button>
            </div>
        </div>
      </td>
    </tr>
  </tbody>
</table>
          </Col>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Dashboard</Link>
          </Col>
        </Row>
      </Container>
    );
  }


export default Tracker;