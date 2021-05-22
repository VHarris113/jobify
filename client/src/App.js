import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import NoMatch from "./pages/NoMatch";
import Signup from "./pages/signup";
import Resume from "./pages/resume";

function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/resume" component={Resume} />   
        <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
