import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/navbar';
import Products from './components/products';

class App extends Component {
  state = {
    navbarItems: [
      {
        label: 'HOME',
        to: '/',
        icon: 'home'
      },
      {
        label: 'PRODUCTS',
        to: '/products',
        icon: 'view_list'
      },
      {
        label: 'CLIENTS',
        to: '/clients',
        icon: 'people'
      },
      {
        label: 'CONTACT',
        to: '/contact',
        icon: 'headset'
      }
    ]
  };

  render() {
    const { navbarItems } = this.state;
    return (
      <Router>
        <div style={{ height: '100vh', overflowY: 'hidden' }}>
          <Navbar navbarItems={navbarItems} />
          <div style={{ height: 'calc(100% - 64px)' }}>
            <Route path="/products" component={Products} />
            <Route exact path="/clients" render={() => <h1>CLIENTS</h1>} />
            <Route exact path="/home" render={() => <h1>HOME</h1>} />
            <Route exact path="/contact" render={() => <h1>CONTACT</h1>} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
