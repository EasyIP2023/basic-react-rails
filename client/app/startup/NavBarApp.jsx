import React from 'react';
import ReactOnRails from 'react-on-rails';
import { Provider } from 'react-redux';

import NavBar from '../components/NavBar';
import NavBarContainer from '../containers/NavBarContainer';
import * as paths from '../constants/paths';

const NavBarApp = (_props, railsContext) => {
  // This is where we get the existing store.
  const { pathname } = railsContext;

  return (
    <NavBar {...{ pathname }} />
  );
};

export default NavBarApp;
