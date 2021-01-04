import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Menu from './Menu';
import Gotem from './Gotem';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <Switch>
                    <Route exact path='/' render={(routerProps) => <Home {...routerProps} />} />
                    <Route path='/gotem' render={() => <Gotem />} />
                    <Route path='/menu' render={() => <Menu />} />
                </Switch>
                <footer>copyright © {new Date().toISOString().substring(0, 4)} strikethrough. all rights reserved.</footer>
            </div>
        );
    }
}

export default App;
