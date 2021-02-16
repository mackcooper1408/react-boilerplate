/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import StringsPage from 'containers/StringsPage/Loadable';
import AddStringsPage from 'containers/AddStringsPage/Loadable';
import { v4 as uuid } from 'uuid';

import GlobalStyle from '../../global-styles';
import Navbar from '../../components/Navbar';

const navItems = [
  { id: uuid(), text: 'Strings', link: '/strings' },
  { id: uuid(), text: 'Add', link: '/add' },
];

export default function App() {
  return (
    <div>
      <Navbar navItems={navItems} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/strings" component={StringsPage} />
        <Route exact path="/add" component={AddStringsPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
