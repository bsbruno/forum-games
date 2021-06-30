import React from "react";

import {
  RouteProps as RouterProsDOM,
  Redirect,
  Route as ReactDOMRoute,
} from "react-router-dom";

import { useAuth } from "../hooks/AuthContext";

interface RouteProps extends RouterProsDOM {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  component: Component,

  isPrivate = false,
  ...props
}) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...props}
      render={() => {
        return isPrivate == !!user ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: isPrivate ? "/" : "home" }} />
        );
      }}
    />
  );
};

export default Route;
