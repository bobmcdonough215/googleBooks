import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search/Search";
import Results from "./pages/Results/Results.js/index.js";
import Saved from "./pages/Saved/Saved";
import noMatch from "./pages/noMatch/noMatch";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/results" component={Results} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/noMatch" component={noMatch} />
          <Route component={noMatch} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
