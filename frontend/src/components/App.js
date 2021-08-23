import React, { Component } from "react";
import { render } from "react-dom";

import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import HomePage from './HomePage';
import BadgePage from './BadgePage';
import EventPage from './EventPage';

function App(){
  return(
    <Router>
      <Switch>
      <Route path="/" exact>
      <HomePage />
    
          </Route>
          
      <Route path="/getBadge">
          <BadgePage />
    
      </Route>
      <Route path="/events">
          <EventPage />
    
      </Route>
          
          
          </Switch>
          </Router>
  )
}

export default App;



const appDiv = document.getElementById("app");
render(<App />, appDiv); 