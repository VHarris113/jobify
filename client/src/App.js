import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import withAuth from "./utils/withAuth";
import Nav from "./components/Nav";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import NoMatch from "./pages/NoMatch";
import SignUp from "./pages/signup";
import Resume from "./pages/resume";
import Upload from "./pages/Upload.js";
import Gallery from "./pages/Gallery.js";
import About from "./pages/About.js";
import Tracker from "./pages/tracker";
import "../src/pages/style.css";
import Insert from "./pages/insert.js";
import secret from "./Secret";

//<Route exact path="/gallery" component={Gallery} />

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/tracker" component={withAuth(Tracker)} />
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/about" component={About} />
          <Route exact path="/insert" component={Insert} />
          {/* //   <Route exact path="/upload" component={Upload} />
       // <Route exact path="/gallery" component={Gallery} /> */}
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
