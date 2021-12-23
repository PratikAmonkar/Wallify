import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("userToken") ? (
          <Component {...props} />
        ) : (
          <Redirect to="authentication/signin" />
        )
      }
    />
  );
};

export default PrivateRoute;
