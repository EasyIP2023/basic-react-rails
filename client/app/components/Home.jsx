import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Home= ({ name, updateName }) => (
  <div>
    <h3>
      Hello, {name}!
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
    <div className="row">
      <div className="col-lg-12">
        <button className='btn btn-primary btn-lg'>Primary</button>
        <button className='btn btn-danger btn-lg'>Danger</button>
        <button className='btn btn-warning btn-lg'>Warning</button>
        <button className='btn btn-info btn-lg'>Info</button>
      </div>
    </div>
  </div>
);

Home.propTypes = {
  name: PropTypes.string.isRequired,
  updateName: PropTypes.func.isRequired,
};
export default Home;
