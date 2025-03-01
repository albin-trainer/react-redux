import {createStore,applyMiddleware,compose} from 'redux';
import { thunk } from 'redux-thunk';
import { MovieReducer } from './MovieReducer';
const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store=createStore(MovieReducer,composeEnhancers(applyMiddleware(thunk)));
export default store;