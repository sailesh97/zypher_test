import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Order from './containers/Order/Order';
import User from './components/User/User';
import Location from './components/Location/Location';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Order/>
       <User/>
       <Location/>
      </div>
    );
  }
}

export default App;
