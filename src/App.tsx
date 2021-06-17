import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import {SignIn} from "./auth/SignIn";

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/sign-in">
            <SignIn/>
          </Route>
        </Switch>
      </Router>
  );
};

export default App;
