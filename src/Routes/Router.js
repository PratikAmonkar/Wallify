import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactusScreen from "../Screens/ContactusScreen";
import LandingPage from "../Screens/LandingPage";
import SigninScreen from "../Screens/SigninScreen";
import SignupScreen from "../Screens/SignupScreen";

const routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/contact">
          <ContactusScreen />
        </Route>
        <Route path="/authentication/signin">
          <SigninScreen />
        </Route>
        <Route path="/authentication/signup">
          <SignupScreen />
        </Route>
      </Switch>
    </Router>
  );
};

export default routes;
