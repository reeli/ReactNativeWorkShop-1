import { createStore, compose, applyMiddleware } from 'redux'
import fetchUserlist from '../reducers/userReducer'

const promiseMiddleware = () => (next) => (action) => {
  if (typeof action.then === 'function') {
    return Promise.resolve(action).then(next)
  }
  return next(action)
}

export default createStore(fetchUserlist, compose(applyMiddleware(promiseMiddleware)))