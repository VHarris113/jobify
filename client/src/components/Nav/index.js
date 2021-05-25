import React from "react";
function Nav() {
  return (
    <div style={{borderBottom:  "5px solid black"}}>
    <nav className="navbar navbar-expand-lg bg-light bg-success">
      <a className=" navbar-brand" href="#">
        {" "}
        <img
          src={process.env.PUBLIC_URL + "/images/jobify.png"}
          style={{ width: 200, height: 200 }}
        />{" "}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto text-secondary">
          <li className="nav-item active">
            <a className="nav-link text-success" href="/">
              dashboard <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link  text-success" href="/resume">
              resume
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-success" href="/login">
              login
            </a>
          </li>
          <li className="nav-item">
          <a href="/signup"  id = "btn-sign-in"  class="btn btn-info">Sign-up</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link text-success" href="/upload">
              upload
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-success" href="/gallery">
              gallery
            </a>
          </li> */}
        </ul>
      </div>
    </nav>
    </div>
  );
}

export default Nav;
