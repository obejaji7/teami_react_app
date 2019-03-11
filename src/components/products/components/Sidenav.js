import React from 'react';
import PropTypes from 'prop-types';
import { Subheader, Avatar, FontIcon, Divider } from 'react-md';
import { NavLink } from 'react-router-dom';

function Sidenav({ sideNavItems }) {
  return (
    <ul className="md-paper md-paper--1">
      <Subheader primaryText="Categories" />
      <li>
        <NavLink activeClassName="active" to="/products/all">
          <Avatar icon={<FontIcon>list</FontIcon>} />
          <span>All</span>
        </NavLink>
      </li>
      <Divider />
      {sideNavItems.map(item => (
        <li key={item.label}>
          <NavLink activeClassName="active" to={`/products/${item.to}`}>
            <Avatar icon={<FontIcon>{item.icon}</FontIcon>} />
            <span>{item.label}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

Sidenav.propTypes = {
  sideNavItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Sidenav;
