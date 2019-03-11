import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductsList from './components/ProductsList';
import Sidenav from './components/Sidenav';

import './products.css';

class Products extends Component {
  static propTypes = {
    match: PropTypes.shape({
      path: PropTypes.string.isRequired
    }).isRequired
  };

  constructor() {
    super();
    this.state = {
      sideNavItems: [
        {
          label: 'Tech',
          icon: 'laptop',
          to: 'tech'
        },
        {
          label: 'Services',
          icon: 'people',
          to: 'services'
        },
        {
          label: 'Office',
          icon: 'folder',
          to: 'office'
        }
      ]
    };
  }

  render() {
    const { match } = this.props;
    const { sideNavItems } = this.state;
    return (
      <div id="products_container">
        <div id="sidenav_container">
          <Sidenav sideNavItems={sideNavItems} />
        </div>

        <div style={{ width: '100%', overflowY: 'auto', padding: '3rem' }}>
          <Route path={`${match.path}/:category`} component={ProductsList} />
          <Route exact path={match.path} render={() => <Redirect to="/products/all" />} />
        </div>
      </div>
    );
  }
}

export default Products;
