import React from "react";
import { Switch, Route } from "react-router-dom";
import SignIn from "./pages/signin/SignIn";
import SignUp from "./pages/signup/SignUp";
import Checkout from "./pages/checkout/Checkout"
const App = () => {
  return (
    <Switch>
      <Route path="/signin">
        <SignIn />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/checkout">
        <Checkout/>
      </Route>
    </Switch>
  );
};

export default App;
