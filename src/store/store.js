import { applyMiddleware, createStore, combineReducers } from "redux";
// import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from "redux-logger";
import { preloadedState } from './preloadedState.js';
import userReducer from './reducers/userReducer';
import requestReducer from './reducers/requestReducer';
import chartReducer from './reducers/chartReducer';

const rootReducer = combineReducers({
  user: userReducer,
  request: requestReducer,
  chartData: chartReducer
})

const thunk = store => next => action =>
  typeof action === 'function' ?
    action(store.dispatch, store.getState())
    :
    next(action)


const middleware = [thunk];
if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}

export default createStore(
  rootReducer,
  preloadedState,
  composeWithDevTools(applyMiddleware(...middleware))
);