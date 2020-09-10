import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./home_page";
import Select from "./select_page";
import Matches from "./matches_page";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/select" component={Select} />
    <Route exact path="/matches" component={Matches} />
    </Switch>
  </BrowserRouter>,
  rootElement);