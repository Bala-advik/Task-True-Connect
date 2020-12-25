import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import { userReducer } from './userReducer'

export const Store = createStore(userReducer,applyMiddleware(logger))