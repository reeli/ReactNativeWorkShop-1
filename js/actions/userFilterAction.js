export const USER_FILTER = 'USER_FILTER'

export function userFilterAction(filter) {
  return {
    type: USER_FILTER,
    payload: filter
  }
}
