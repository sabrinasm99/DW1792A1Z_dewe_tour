import React from "react";
import "./App.css";
import "./assets/main.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DetailTrip from "./pages/DetailTrip";
import Payment from "./pages/Payment";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/detail-trip" component={DetailTrip} />
        <Route path="/payment" component={Payment} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
