export const apiDomain = 'http://countdown.dev/'

export const getHeader = function () {
  const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
  return {
    'Accept': 'application/json',
    'Authorization': 'Bearer ' + tokenData.access_token
  }
}
