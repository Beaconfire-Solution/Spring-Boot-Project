import React, { Component } from "react";
import './App.css';
import TimeSheetHome from './components/TimeSheetHome/TimeSheetHome';
import Profile from './components/Profile/profile';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/css/bootstrap.css';
import { Route, Redirect, Switch} from "react-router-dom";
import NavBar from './components/navbar/navbar';
import Summaries from "./components/Summary/summaris";
import NotFound from "./components/Summary/notFound";
import LogIn from "./components/Login/login";


class App extends Component {
  state = {
    user : window.sessionStorage.getItem("user")
  }

  render() {
    return (
      <div>
        <div>
          <Switch>
            <Route exact path={["/", "/login"]} component={LogIn} />
            {!this.state.user && <Redirect to='/login' />}


            <Route>
                <NavBar />
                  <main className="container">
                      <Route exact path="/summary" component={Summaries} />
                      <Route exact path="/timesheet" component={TimeSheetHome} />
                      <Route exact path="/profile" component={Profile} />
                      <Route exact path="/not-found" component={NotFound} />
                
                      {/* <Redirect to="/not-found" /> */}
                  </main>
            </Route>
                  
          
            
          </Switch>
        </div>
      </div>
    );
  }

}

export default App;

