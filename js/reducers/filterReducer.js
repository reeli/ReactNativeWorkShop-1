import { USER_FILTER } from '../actions/userFilterAction'
import { AlertIOS } from 'react-native'


export default function filterReducer(state = '', action) {
  switch (action.type) {
    case USER_FILTER:
      AlertIOS.alert(action.payload)
      return action.payload
    default:
      return state
  }
}