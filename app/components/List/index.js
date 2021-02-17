import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import Ul from './Ul';

function List({ items, component }) {
  const ComponentToRender = component;
  const content = items.map(item => (
    <ComponentToRender key={item.id} {...item} />
  ));

  return (
    <Wrapper>
      <Ul>{content}</Ul>
    </Wrapper>
  );
}

List.propTypes = {
  component: PropTypes.elementType.isRequired,
  items: PropTypes.array.isRequired,
};

export default List;
