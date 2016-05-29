import { USER_FILTER } from '../actions/userFilterAction'


export default function filterReducer(state = '', action) {
  switch (action.type) {
    case USER_FILTER:
      return action.payload
    default:
      return state
  }
}