import { combineReducers } from 'redux';
import { NAVBAR_LINK_UPDATE } from '../constants/navBarConstants';

const link = (state = '', action) => {
  switch (action.type) {
    case NAVBAR_LINK_UPDATE:
      return action.text;
    default:
      return state;
  }
};

const navBarReducer = combineReducers({ link });

export default navBarReducer;
