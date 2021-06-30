import React from "react";
import ReactDOM from "react-dom";
import { GloabalStyle } from "../src/styles/global";
import App from "./App";
import { AuthProvider } from "../src/hooks/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <App />

    <GloabalStyle />
  </React.StrictMode>,
  document.getElementById("root")
);
