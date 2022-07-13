import React from "react";
import { Provider } from "react-redux";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import SignUpFormContainer from "./session/signup_form_container";
import LogInFormContainer from "./session/login_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SplashContainer from "./splash/splash_container";
import BusinessContainer from "./business/business_container";
import SearchIndexContainer from "./search/search_index_container";
import SearchNavContainer from "./search/search_nav_container";
import NavContainer from "./nav/nav_container";
const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <Route exact path="/businesses/:id" component={BusinessContainer} />
      {/* <Route path="/search" component={NavContainer} /> */}
      <Route exact path="/search" component={SearchIndexContainer} />
      <Route exact path="/" component={SplashContainer} />
    </Switch>
  </div>
);

export default App;
