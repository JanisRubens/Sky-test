import React from "react";
import ReactDOM from "react-dom";

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

import AppContainer from './containers/AppContainer';


//Main Pages
import Index from "./pages/index";
import NotFound from "./pages/notFound";
import Checkout from "./pages/checkout";

export default (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={Index} />
        <Route path="/checkout" component={Checkout} />
      </Route>
      <Route path='*' component={NotFound} />
    </Router>
  </Provider>
);
