import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserProvider } from "../Contexts/UserContext";
import ContactusScreen from "../Screens/ContactusScreen";
import LandingPage from "../Screens/LandingPage";
import SigninScreen from "../Screens/SigninScreen";
import SignupScreen from "../Screens/SignupScreen";
import PrivateRoute from "./PrivateRoute";
const routes = () => {
  return (
    <Router>
      <UserProvider>
        <Switch>
          <PrivateRoute exact path="/" component={LandingPage} />
          <PrivateRoute exact path="/contact" component={ContactusScreen} />
          <Route path="/authentication/signin" component={SigninScreen} />
          <Route path="/authentication/signup" component={SignupScreen} />
        </Switch>
      </UserProvider>
    </Router>
  );
};

export default routes;
