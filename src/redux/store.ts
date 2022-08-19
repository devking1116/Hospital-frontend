import { applyMiddleware, compose, createStore, combineReducers } from "redux"
import thunk from "redux-thunk"

import hospitalReducer from './reducer/hospitalReducer';
const rootReducer = combineReducers({

  hospital: hospitalReducer,
});

const middleware = [thunk];
const composeEnhancers = compose(applyMiddleware(...middleware));

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers);
};

const store = configureStore();

export default store;
