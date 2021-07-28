import { createStore, combineReducers } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import favorite from './reducers'

const store = createStore(combineReducers({ favorite }), composeWithDevTools())
// console.log(store.getState(), 'data from store');

export default store;