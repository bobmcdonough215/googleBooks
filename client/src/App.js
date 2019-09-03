import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import noMatch from "./pages/noMatch";
import Nav from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/noMatch" component={noMatch} />


          <Route component={noMatch} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
