import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import Login from './components/Login';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       
       <h1>React</h1>

      <nav>
      <NavLink to="/login">Login</NavLink> 
      </nav>
      <main>
       <Route path="/login" component={Login} />
      </main>


      </div>
    );
  }
}

export default withRouter(App);
