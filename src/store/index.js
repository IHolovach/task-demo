import {
  createStore,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';

const configureStore = () => createStore(
  applyMiddleware(thunk),
);

export default configureStore();
