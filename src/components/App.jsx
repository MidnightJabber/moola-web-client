import React, { Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Switch } from 'react-router-dom';
import Login from 'Components/Major/Login/Login';
import Signup from 'Components/Major/Signup/Signup';
import Dashboard from 'Components/Major/Dashboard/Dashboard';

export const Routes = {
    Root: '/',
    Dashboard: '/dashboard',
    Login: '/login',
    Signup: '/signup'
}

class App extends Component {
    render() {
        return (
            <div>
                <Route name="Signup" path="/signup" component={Signup} />
                <Route name="Login" path="/login" component={Login} />
                <Route name="Dashboard" path="/dashboard" component={Dashboard} />
            </div>
        );
    }
}

export default App;
