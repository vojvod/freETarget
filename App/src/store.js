import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';

import rootReducer from './reducer';
import { history } from './history';

// Create and configure store

let middleware = [
    thunk, // lets us dispatch functions
    routerMiddleware(history), // intercept navigation actions
];

/* global process */
if (process.env.NODE_ENV !== 'production') {
    // The logger middleware should always be last
    middleware.push(logger);
}

let initialState = {};
let store = createStore(
    rootReducer, initialState, applyMiddleware(...middleware)
);

export default store;
