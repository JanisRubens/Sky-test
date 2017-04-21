import { createStore, compse, applyMiddleware } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';
import { createMiddleware } from 'redux-promises';
import logger from 'redux-logger'
import ReduxThunk from 'redux-thunk'

// import the root reducer
import rootReducer from './reducers/index';


const promisesMiddleware = createMiddleware();
const store = applyMiddleware(promisesMiddleware, logger, ReduxThunk)(createStore)(rootReducer);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;