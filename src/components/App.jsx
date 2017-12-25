import React, { Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Login from './Login';
import Dashboard from './Dashboard';

class App extends Component {
    render() {
        return (
            <div>
                <Route path="/login" component={Login} />
                <Route path="/dashboard" component={Dashboard} />
            </div>
        );
    }
}

export default App;
