import React, { Component } from 'react';
import NavBar from '../navbar/navbar';
import Summaries from "./summaris";
import NotFound from "./notFound";
import { Route, Redirect, Switch } from "react-router-dom";
import TimeSheetHome from '../TimeSheetHome/TimeSheetHome';
import Profile from '../Profile/profile';


class Dashboard extends Component {
    render() { 
        return (
            <div>
                <NavBar />
                <main className="container">
                    <Route path={ ["/", "/summary"]} component={Summaries} />
                      <Route path="/timesheet" component={TimeSheetHome} />
                      <Route path="/profile" component={Profile} />
                      <Route path="/not-found" component={NotFound} />
                
                      {/* <Redirect to="/not-found" /> */}
                </main>
            </div>
            
         );
    }
}
 
export default Dashboard;