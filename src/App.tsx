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

function App() {
  return (
      <Provider store={store}>
          <Router>
              <Switch>
                  <Route path="/sign-in">
                      <SignIn/>
                  </Route>
              </Switch>
          </Router>
      </Provider>
  );
};

export default App;
