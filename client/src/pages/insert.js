import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react";
import "bootstrap/dist/js/bootstrap.min.js";

function Insert() {
  const [state, setState] = React.useState({
    company: "",
    title: "",
    location: "",
    salary: "",
    url: "",
    applied: "",
    followUp: "",
    notes: "",
  });

  function handleChange(evt) {
    const value =
      evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log("You clicked submit.");
  }

  return (
    <div className="insert">
      <form>
        <div>
          <Button onClick={() => setState("Wishlist")} variant="outline-info">
            Wishlist
          </Button>{" "}
          <Button onClick={() => setState("Pending")} variant="outline-warning">
            Pending
          </Button>{" "}
          <Button onClick={() => setState("Denied")} variant="outline-danger">
            Denied
          </Button>{" "}
          <Button onClick={() => setState("Offer")} variant="outline-success">
            Offer
          </Button>{" "}
        </div>
        <label>
          <div className="heading">Company</div>
          <input
            type="text"
            name="company"
            value={state.company}
            onChange={handleChange}
          />
        </label>
        <label>
          <div className="heading">Title</div>
          <input
            type="text"
            name="title"
            value={state.title}
            onChange={handleChange}
          />
        </label>
        <label>
          <div className="heading">Location</div>
          <input
            type="text"
            name="location"
            value={state.location}
            onChange={handleChange}
          />
        </label>
        <label>
          <div className="heading">Salary</div>
          <input
            type="number"
            name="salary"
            value={state.salary}
            onChange={handleChange}
          />
        </label>
        <label>
          <div className="heading">url</div>
          <input
            type="link"
            name="title"
            value={state.url}
            onChange={handleChange}
          />
          <label>
            <div className="heading">Date</div>
            <input
              type="date"
              name="appliedDate"
              value={state.appliedDate}
              onChange={handleChange}
            />
          </label>
        </label>

        <label>
          <div className="heading">Notes</div>
          <textarea
            type="text"
            name="notes"
            value={state.notes}
            onChange={handleChange}
          />
        </label>
        <div>
          <div className="heading">followUp</div>
          <label>
            Follow Up
            <input
              type="radio"
              name="option"
              value="followUp"
              checked={state.option === "followUp"}
              onChange={handleChange}
            />
          </label>
          <label>
            No Follow Up
            <input
              type="radio"
              name="option"
              value="noFollowUp"
              checked={state.level === "noFollowUp"}
              onChange={handleChange}
            />
          </label>
        </div>

        <label>
          <div className="heading">Are you interested ib a follow up?</div>
          <input
            type="checkbox"
            name="followUp"
            checked={state.Followup}
            onChange={handleChange}
          />
        </label>

        <Button
          onSubmit={handleSubmit}
          variant="primary"
          type="Submit"
        ></Button>
      </form>
    </div>
  );
}
export default Insert;
