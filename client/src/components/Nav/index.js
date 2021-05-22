import React from "react";
function Nav() {
  return (
<nav class="navbar navbar-expand-lg bg-light bg-success">
  <a  class=" navbar-brand" href="#"> <img src={process.env.PUBLIC_URL + "/images/jobify.png"} style={{width:200, height:200}} /> </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto text-secondary">
      <li class="nav-item active">
        <a class="nav-link text-success" href="/">dashboard <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link  text-success" href="/resume">resume</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-success" href="/login">login</a>
      </li>
      <li class="nav-item">
      <a class="nav-link text-success" href="/signup">sign-up</a>
      </li>
    </ul>
  </div>
</nav>
  );
}

export default Nav;
