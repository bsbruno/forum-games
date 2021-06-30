/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { AuthProvider } from "../src/hooks/AuthContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
