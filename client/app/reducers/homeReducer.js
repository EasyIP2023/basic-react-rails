import { combineReducers } from 'redux';
import { HOME_NAME_UPDATE } from '../constants/homeConstants';

const name = (state = '', action) => {
  switch (action.type) {
    case HOME_NAME_UPDATE:
      return action.text;
    default:
      return state;
  }
};

const homeReducer = combineReducers({ name });

export default homeReducer;
