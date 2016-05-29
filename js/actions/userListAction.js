
export const FetchUser = 'FetchUser'


export function fetchUserListAction() {
  return dispatch => {
    fetch('http://facehub.net/api/users', {
      headers: {
        Cookie: 'token=38dqyWGFnHf6U6C2bYpwet'
      }
    })
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      throw res.error()
    })
    .then(json => dispatch({
      type: FetchUser,
      payload: json.users
    }))
    .catch(error => console.log('request error: ', error))
  }
}