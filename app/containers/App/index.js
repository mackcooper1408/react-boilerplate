/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import StringsPage from 'containers/StringsPage/Loadable';
import AddStringsPage from 'containers/AddStringsPage/Loadable';

import GlobalStyle from '../../global-styles';
import Navbar from '../../components/Navbar';

// NavLink items | id used for unique key props
const navItems = [
  { id: '1', text: 'Strings', link: '/strings' },
  { id: '2', text: 'Add', link: '/add' },
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
