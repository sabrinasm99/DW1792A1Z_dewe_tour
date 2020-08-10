import React from "react";
import "./App.css";
import "./assets/main.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DetailTrip from "./pages/DetailTrip";
import Payment from "./pages/Payment";
import Profile from "./pages/Profile";
import ListTransaction from "./pages/ListTransaction";
import IncomeTrip from "./pages/IncomeTrip";
import AddTrip from "./pages/AddTrip";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/detail-trip/:id" exact component={DetailTrip} />
        <Route path="/payment" component={Payment} />
        <Route path="/profile" component={Profile} />
        <Route path="/list-transaction" component={ListTransaction} />
        <Route path="/income-trip" component={IncomeTrip} />
        <Route path="/add-trip" component={AddTrip} />
      </Switch>
    </Router>
  );
}

export default App;
