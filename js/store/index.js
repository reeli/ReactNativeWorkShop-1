import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import fetchUserlist from '../reducers/userReducer'

export default createStore(fetchUserlist, compose(applyMiddleware(thunk)))
