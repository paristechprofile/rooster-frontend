import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar.js';
import MyRoutes from './config/MyRoutes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        {MyRoutes}
      </div>
    );
  }
}

export default App;