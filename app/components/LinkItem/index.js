import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Item from './Item';
import Wrapper from './Wrapper';

function LinkItem({ text, link }) {
  return (
    <Wrapper>
      <Item as={Link} to={link}>
        {text}
      </Item>
    </Wrapper>
  );
}

LinkItem.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
};

export default LinkItem;
