import React from "react";
import { Provider } from "react-redux";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import Home from "./home/home";
import NavContainer from "./nav/nav_container";
import SignUpFormContainer from "./session/signup_form_container";
import LogInFormContainer from "./session/login_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
  <div>
    <Route exact path="/" component={NavContainer} />
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </Switch>
  </div>
);

export default App;
