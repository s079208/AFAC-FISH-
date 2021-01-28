import React from "react";
import { StrictMode } from "react";

// import global styles
import GlobalStyle from "./components/GlobalStyle";

import Home from "./pages/Home";
import Visplek from "./pages/visplek";
import Azen from "./pages/azen";
import Vissoort from "./pages/vissoort";
import Record from "./pages/record";
import Winkel from "./pages/winkel";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/visplek">
            <Visplek />
          </Route>
          <Route path="/azen">
              <Azen />
          </Route>
          <Route path="/vissoort">
            <Vissoort />
          </Route>
          <Route path="/record">
            <Record />
          </Route>
          <Route path="/winkel">
            <Winkel />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}
