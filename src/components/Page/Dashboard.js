import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './Tabs/Home';
import Analytics from './Tabs/Analytics';
import Reports from './Tabs/Reports';
import Profile from './Tabs/Profile';
import BottonBar from '../UI/BottonBar';

function Dashboard() {
  return (
    <>
        <Router>
            <Switch>
                <Route path="/dashboard/home">
                    <Home />
                </Route>
                <Route path="/dashboard/analytics">
                    <Analytics />
                </Route>
                <Route path="/dashboard/reports">
                    <Reports />
                </Route>
                <Route path="/dashboard/profile">
                    <Profile />
                </Route>
            </Switch>

            <BottonBar />

        </Router>
    </>
  )
}

export default Dashboard