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
import PrivateRouteUser from "./utils/PrivateRouteUser";
import PrivateRouteAdmin from "./utils/PrivateRouteAdmin";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/detail-trip/:id" exact component={DetailTrip} />
        <PrivateRouteUser path="/payment" component={Payment} />
        <PrivateRouteUser path="/profile" component={Profile} />
        <PrivateRouteAdmin path="/list-transaction" component={ListTransaction} />
        <PrivateRouteAdmin path="/income-trip" component={IncomeTrip} />
        <PrivateRouteAdmin path="/add-trip" component={AddTrip} />
      </Switch>
    </Router>
  );
}

export default App;
