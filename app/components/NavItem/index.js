import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Item from './Item';
import Wrapper from './Wrapper';

function NavItem({ text, link }) {
  return (
    <Wrapper>
      <Item as={NavLink} activeClassName="is-active" exact to={link}>
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
