import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import "./style.css";
function Tracker(props) {
  return (
      <Container >
 
            <div  className="row" style={{marginRight: 100, marginLeft: 100}} >
            <div className="badge col md-1">
                <button  id= "wishlist" style={{ width:  150, height:  150}}  type="button" class="btn ">
                <span>Wishlist</span><span class="badge badge-secondary"> 1</span>
                </button>
            </div>
            <div className="badge col md-1">
                <button id= "pending"  style={{ width: 150, height:  150}}  type="button" class="btn ">
                  Pending <span class="badge badge-secondary"> 3</span>
                </button>
            </div>
            <div  className="badge col md-1">
                <button  id= "denied"  style={{ width:  150, height:  150}} type="button" class="btn ">
                  Denied <span class="badge badge-secondary"> 3</span>
                </button>
            </div>
            <div className="badge col md-1">
                <button  id= "offer"  style={{ width:  150, height:  150}}  type="button" class="btn ">
                  Offer <span class="badge badge-secondary"> 3</span>
                </button>
            </div>
            </div>
              <div  class="text-right">
              <a href="/insert"  id = "addbtn" class="btn btn-secondary">add a job</a>
            </div>
              <table class="table table-striped">
  <thead>
    <tr>

    </tr>
  </thead>
  <tbody>
    <tr>
      <td className = "text-left" >
      <h5>Developer</h5>
      <span class="">Dell</span>
      </td>
      <td className = "text-right" >
      <div  className="row">
        
      <div id = "legend"> ---- </div>
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
      <h5>Sr Developer</h5>
      <span class="">Infor</span>
      </td>
      <td className = "text-right" >
      <div  className="row">
      <div id = "legendOffer">----</div>
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
      </Container>
    );
  }


export default Tracker;