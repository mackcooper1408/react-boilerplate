import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Item from './Item';
import Wrapper from './Wrapper';

function NavItem({ text, link }) {
  return (
    <Wrapper>
      <Item as={Link} to={link}>
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
