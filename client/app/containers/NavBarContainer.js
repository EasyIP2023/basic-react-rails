import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import BaseComponent from '../libs/components/BaseComponent';

import NavBar from '../components/NavBar';

function stateToProps(state) {
  return { pathname: state.railsContext.pathname };
}

class NavBarContainer extends BaseComponent {
  static propTypes = {
    pathname: PropTypes.string.isRequired,
  };

  render() {
    const { pathname } = this.props;

    return (
      <NavBar {...{ pathname }} />
    );
  }
}

// Don't forget to actually use connect!
export default connect(stateToProps)(NavBarContainer);
