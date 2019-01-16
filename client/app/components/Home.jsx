import PropTypes from 'prop-types';
import React from 'react';

import { Button, ButtonToolbar } from 'react-bootstrap';

const Home= ({ name, updateName }) => (
  <div>
    <h3>
      Hello, {name}! Vince
    </h3>
    <hr />
    <form >
      <label htmlFor="name">
        Say hello to:
      </label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => updateName(e.target.value)}
      />
    </form>
    <hr />
    <h1>Testin HMR </h1>
    <ButtonToolbar>
      <Button>Default</Button>
      <Button bsStyle="primary" bsSize="large">Large primary</Button>
      <Button bsStyle="success">Success</Button>
      <Button bsStyle="info">Info</Button>
      <Button bsStyle="warning">Warning</Button>
      <Button bsStyle="danger">Danger</Button>
      <Button bsStyle="link">Link</Button>
    </ButtonToolbar>
  </div>
);

Home.propTypes = {
  name: PropTypes.string.isRequired,
  updateName: PropTypes.func.isRequired,
};
export default Home;
