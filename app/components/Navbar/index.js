import React from 'react';
import PropTypes from 'prop-types';

import NavList from './NavList';
import Wrapper from './Wrapper';
import NavItem from '../NavItem';

function Navbar({ navItems }) {
  const content = navItems.map(({ id, text, link }) => (
    <NavItem key={id} text={text} link={link} />
  ));

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
