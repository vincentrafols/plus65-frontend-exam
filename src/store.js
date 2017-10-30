import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import reducer from './Reducers';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

export default createStore(
    reducer,
    applyMiddleware(logger, promise(), thunk)
);