import React from "react";
import { Switch, Route } from "react-router-dom";
import SignIn from "./screens/signin/SignIn";
import SignUp from "./screens/signup/SignUp";
import Checkout from "./screens/checkout/Checkout";
import Dashboard from "./screens/home/Dashboard";

const App = () => {
  return (
    <Switch>
      <Route path="/home">
        <Dashboard />
      </Route>
      <Route path="/signin">
        <SignIn />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/checkout">
        <Checkout />
      </Route>
    </Switch>
  );
};

export default App;
