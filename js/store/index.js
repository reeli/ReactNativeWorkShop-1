import { createStore } from 'redux'
import fetchUserlist from '../reducers/userReducer'

export default createStore(fetchUserlist)