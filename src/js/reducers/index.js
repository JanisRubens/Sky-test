import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as idleReducer, createMiddleware } from 'redux-promises';

import productReducer from './productReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  idle: idleReducer,
  user: userReducer,
  products: productReducer,
  routing: routerReducer
});

export default rootReducer;