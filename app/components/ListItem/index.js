import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import Wrapper from './Wrapper';

function ListItem({ item }) {
  return (
    <Wrapper>
      <Item>{item}</Item>
    </Wrapper>
  );
}

ListItem.propTypes = {
  item: PropTypes.string,
};

export default ListItem;
