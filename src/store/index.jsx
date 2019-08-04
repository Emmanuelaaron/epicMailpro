
/* istanbul ignore next */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../Redux/reducer/index';

const enhacers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension(),
);
const store = createStore(
  reducers, enhacers,
);

export default store;
