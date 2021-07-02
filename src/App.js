import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Students from "./components/Students";
import Studentadd from "./components/Studentadd";
import Studentdetailedit from "./components/Studentdetailsedit";
import Pagenotfound from "./components/Pagenotfound";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Students />
          </Route>
          <Route exact path="/students/add">
            <Studentadd />
          </Route>
          <Route exact path="/students/edit/:id">
            <Studentdetailedit />
          </Route>
          <Route exact path="*">
            <Pagenotfound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
