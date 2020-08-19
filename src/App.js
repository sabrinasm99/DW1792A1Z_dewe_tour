import React, { useState } from "react";
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
import ModalLogin from "./components/subcomponents/ModalLogin";
import ModalRegister from "./components/subcomponents/ModalRegister";
import PrivateRouteUser from "./settings/PrivateRouteUser";
import PrivateRouteAdmin from "./settings/PrivateRouteAdmin";
import Country from "./pages/Country";
import AddCountry from "./pages/AddCountry";

function App() {
  const [showModalLogin, setShowModalLogin] = useState(false);
  const [showModalRegister, setShowModalRegister] = useState(false);

  return (
    <Router>
      {showModalLogin && <ModalLogin setShowModalLogin={setShowModalLogin} />}
      {showModalRegister && (
        <ModalRegister setShowModalRegister={setShowModalRegister} />
      )}
      <Switch>
        <Route path="/" exact>
          <Home
            setShowModalLogin={setShowModalLogin}
            setShowModalRegister={setShowModalRegister}
          />
        </Route>
        <Route path="/detail-trip/:id">
          <DetailTrip
            setShowModalLogin={setShowModalLogin}
            setShowModalRegister={setShowModalRegister}
          />
        </Route>
        <PrivateRouteUser path="/payment" component={Payment} />
        <PrivateRouteUser path="/profile" component={Profile} />
        <PrivateRouteAdmin path="/list-transaction" component={ListTransaction} />
        <PrivateRouteAdmin path="/income-trip" component={IncomeTrip} />
        <PrivateRouteAdmin path="/add-trip" component={AddTrip} />
        <PrivateRouteAdmin path="/country" component={Country} />
        <PrivateRouteAdmin path="/add-country" component={AddCountry} />
      </Switch>
    </Router>
  );
}

export default App;
