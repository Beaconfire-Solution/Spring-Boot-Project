import React, { Component } from "react";
import './App.css';
import TimeSheetHome from './components/TimeSheetHome/TimeSheetHome';
import Profile from './components/Profile/profile';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/css/bootstrap.css';
import { Route, Redirect, Switch } from "react-router-dom";
import NavBar from './components/navbar/navbar';
import Summaries from "./components/Summary/summaris";
import NotFound from "./components/Summary/notFound";


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/summary" component={Summaries} />
            <Route path="/timesheet" component={TimeSheetHome} />
            <Route path="/profile" component={Profile} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/summary" />
            <Redirect to="/not-found"/>
          </Switch>
        </main>
      </React.Fragment>
    );
  }

}

export default App;

