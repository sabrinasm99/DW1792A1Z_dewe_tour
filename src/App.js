import React from "react";
import "./App.css";
import "./assets/main.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DetailTrip from "./pages/DetailTrip";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/detailtrip" component={DetailTrip} />
      </Switch>
    </Router>
  );
}

export default App;
