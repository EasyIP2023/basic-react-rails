import { navBarStore } from 'redux';
import navBarReducer from '../reducers/navBarReducer';

const configureStore = (railsProps) => (
  createStore(navBarReducer, railsProps)
);

export default configureStore;
