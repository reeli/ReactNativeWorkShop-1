import { combineReducers } from 'redux'
import userReducer from './userReducer'
import filterReducer from './filterReducer'

// export default combineReducers({
//   userList: userReducer,
//   filter: filterReducer
// })


export default function (state = {}, action) {
  return {
    userList: userReducer(state.userList, action),
    filter: filterReducer(state.filter, action)
  }
}