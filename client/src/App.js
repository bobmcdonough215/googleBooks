import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Results from "./pages/Results";
import Saved from "./pages/Saved";
import noMatch from "./pages/noMatch";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/Search" component={Search} />
          <Route exact path="/Results" component={Results} />
          <Route exact path="/Saved" component={Saved} />
          <Route component={noMatch} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
