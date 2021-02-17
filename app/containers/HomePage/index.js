/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import LinkItem from 'components/LinkItem';
import H1 from 'components/H1';
import List from 'components/List';
import messages from './messages';

// items to be displayed | id used for unique key props
const items = [
  {
    id: '1',
    text: 'See the Strings',
    link: '/strings',
  },
  {
    id: '2',
    text: 'Add a String',
    link: '/add',
  },
];

export default function HomePage() {
  return (
    <div>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
      <List items={items} component={LinkItem} />
    </div>
  );
}
