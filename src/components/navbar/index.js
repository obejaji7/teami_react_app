import React from 'react';
import { Toolbar, Avatar, FontIcon } from 'react-md';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './navbar.css';

function buildLinks(navbarItems) {
  return navbarItems.map(item => {
    return (
      <li key={item.label}>
        <NavLink exact={item.to === '/'} activeClassName="active" to={item.to}>
          <Avatar icon={<FontIcon>{item.icon}</FontIcon>} />
          <span>{item.label}</span>
        </NavLink>
      </li>
    );
  });
}

function Navbar({ navbarItems }) {
  return (
    <div>
      <Toolbar themed>
        <ul className="navbar">{buildLinks(navbarItems)}</ul>
      </Toolbar>
    </div>
  );
}

Navbar.propTypes = {
  navbarItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Navbar;
