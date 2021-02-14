import React from 'react';
import PropTypes from 'prop-types';

import NavList from './NavList';
import Wrapper from './Wrapper';
import NavItem from '../NavItem';

function Navbar({ navItems }) {
  let content = <div />;

  // If we have navItems, render them
  if (navItems) {
    content = navItems.map(navItem => (
      <NavItem
        key={`item-${navItem.id}`}
        text={navItem.text}
        link={navItem.link}
      />
    ));
  } else {
    // Otherwise render a single component
    content = <NavItem />;
  }

  return (
    <Wrapper>
      <NavList>{content}</NavList>
      <NavItem text="Home" link="/" />
    </Wrapper>
  );
}

Navbar.propTypes = {
  navItems: PropTypes.array,
};

export default Navbar;
