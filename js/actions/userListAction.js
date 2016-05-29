
export const FetchUser = 'FetchUser'


export function fetchUserListAction() {
  return fetch('http://fakeserver.dev/api/users')
  .then(res => {
    if (res.ok) {
      return {
        type: FetchUser,
        payload: res.json().users
      }
    }
    return res.error()
  })
  .catch(error => console.log('request error: ', error))

  // return {
  //   type: FetchUser,
  //   payload: []
  // }
}