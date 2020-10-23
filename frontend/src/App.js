import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Layout from "./components/Layout";
import NewEvent from "./components/NewEvent";
import EventDetails from "./components/EventDetails";

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function App() {
  
  

  return (
    <Router>
      <div>
        <Switch>
            <Route path="/event/:id"> 
              <Header />
              <EventDetails />
            </Route>
            <Route path="/newEvent">
            <Header />
            <NewEvent/>
          </Route>
          <Route path="/about">
            <Header />
            <About />
          </Route>
          <Route path="/users">
            <Header />
            <Users />
          </Route>
          <Route path="/">
            <Header />
            <Layout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
