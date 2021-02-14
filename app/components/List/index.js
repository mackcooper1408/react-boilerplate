import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import Ul from './Ul';

function List({ items, component }) {
  const ComponentToRender = component;
  let content = <div />;

  // If we have item, render them
  if (items) {
    content = items.map(item => (
      <ComponentToRender key={`item-${item.id}`} {...item} />
    ));
  } else {
    // Otherwise render a single component
    content = <ComponentToRender />;
  }

  return (
    <Wrapper>
      <Ul>{content}</Ul>
    </Wrapper>
  );
}

List.propTypes = {
  component: PropTypes.elementType.isRequired,
  items: PropTypes.array,
};

export default List;
