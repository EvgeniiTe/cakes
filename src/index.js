import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { store } from "./store";
import { App } from "./components/app/index";
import { ErrorBoundary } from "./components/error-boundary";
import { CakesServiceProvider } from "./components/service-context";
import {
  getAllCakes,
  getCake,
  getNavMain,
  getMainInfoFill,
  getStoryInfoFill,
} from "./services/service";

const serviceFunctions = {
  getAllCakes,
  getCake,
  getNavMain,
  getMainInfoFill,
  getStoryInfoFill,
};

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <CakesServiceProvider value={serviceFunctions}>
        <Router>
          <App />
        </Router>
      </CakesServiceProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById("root")
);
