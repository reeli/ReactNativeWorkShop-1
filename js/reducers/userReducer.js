
import { fetchUserListAction, FetchUser } from "../actions/userListAction"

export default function fetchUserlist(state = [], action) {
  switch (action.type) {
    case FetchUser:
      return [...action.payload]
    default:
      return state
  }
}

