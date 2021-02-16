import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Item from './Item';
import Wrapper from './Wrapper';
import './NavItem.css';

function NavItem({ text, link }) {
  return (
    <Wrapper>
      <Item activeClassName="is-active" exact as={NavLink} to={link}>
        {text}
      </Item>
    </Wrapper>
  );
}

NavItem.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
};

export default NavItem;
