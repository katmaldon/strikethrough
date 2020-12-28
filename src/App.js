import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomeContainer from './Containers/HomeContainer';
import AboutContainer from './Containers/AboutContainer';
import MenusContainer from './Containers/MenusContainer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <Switch>
                    <Route exact path='/' render={(routerProps) => <HomeContainer {...routerProps} />} />
                    <Route path='/contact' render={() => <ContactContainer />} />
                    <Route path='/menu' render={() => <MenusContainer />} />
                    <Route path='/about' render={() => <AboutContainer />} />
                </Switch>
                <footer>copyright © {new Date().toISOString().substring(0, 4)} strikethrough. all rights reserved.</footer>
            </div>
        );
    }
}

export default App;
