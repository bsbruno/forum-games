import React from "react";
import { Switch, Route as Teste } from "react-router-dom";
import Route from "./Route";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";

import Account from "../pages/Account";
import DashBoard from "../pages/Dashboard";
import Edit from "../pages/Edit";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" exact component={SignUp} />
    <Route path="/home" exact component={Home} isPrivate />
    <Route path="/account" exact component={Account} isPrivate />
    <Route path="/post/v1/:id" exact component={DashBoard} isPrivate />
    <Route path="/edit" exact component={Edit} isPrivate />
    <Route path="/forgot-password" exact component={ForgotPassword} />
    <Route path="/reset-password" exact component={ResetPassword} />
  </Switch>
);

export default Routes;
