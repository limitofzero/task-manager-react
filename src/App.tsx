import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import {SignIn} from "./auth/sign-in/SignIn";
import {Provider} from "react-redux";
import {store} from "./store";
import {Main} from "./main/Main";
import {GuardedRoute} from "./guards/GuardedRoute";

function App() {
  return (
      <Provider store={store}>
          <Router>
              <Switch>
                  <Route path="/sign-in">
                      <SignIn/>
                  </Route>
                  <GuardedRoute path="/" isActive={() => false} redirectTo="/sign-in">
                      <Main/>
                  </GuardedRoute>
              </Switch>
          </Router>
      </Provider>
  );
};

export default App;
