import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import SignIn from "../components/signIn";
import SignUp from "../components/signUp";
import Main from "../main";
import AuthApi from "../utils/AuthApi";

function Routes() {
  return (
    <Switch>
      <RouteRegistration path="/signin" component={SignIn} />
      <RouteRegistration path="/signup" component={SignUp} />
      <RouteProtected path="/home" component={Main} />
    </Switch>
  );
}

const RouteRegistration = ({ component: Component, ...rest }) => {
  const authApi = React.useContext(AuthApi);
  return (
    <Route
      {...rest}
      render={(props) =>
        !authApi.auth ? <Component {...props} /> : <Redirect to="/home" />
      }
    />
  );
};

const RouteProtected = ({ component: Component, ...rest }) => {
  const authApi = React.useContext(AuthApi);
  return (
    <Route
      {...rest}
      render={(props) =>
        authApi.auth ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
};
export default Routes;
