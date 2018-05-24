import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const enhancer = compose(applyMiddleware(thunk));
export default createStore(rootReducer, enhancer);

