import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactusScreen from "../Screens/ContactusScreen";
import LandingPage from "../Screens/LandingPage";
import SigninScreen from "../Screens/SigninScreen";
import SignupScreen from "../Screens/SignupScreen";
import ForgotPasswordScreen from "../Screens/ForgotPasswordScreen";
import PrivateRoute from "./PrivateRoute";
const routes = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={LandingPage} />
        <PrivateRoute exact path="/contact" component={ContactusScreen} />
        <Route path="/authentication/signin" component={SigninScreen} />
        <Route path="/authentication/signup" component={SignupScreen} />
        <Route
          path="/authentication/forgot_password/:token"
          component={ForgotPasswordScreen}
        />
      </Switch>
    </Router>
  );
};

export default routes;
