import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactusScreen from "../Screens/ContactusScreen";
import LandingPage from "../Screens/LandingPage";

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
      </Switch>
    </Router>
  );
};

export default routes;
