import Cookies from 'js-cookie'

export const LogOut = () => {
  Cookies.remove('auth_token')
  Cookies.remove('full_name')
  Cookies.remove('__auth_refresh_token__')
  Cookies.remove('__auth_access_token__')
  Cookies.remove('accept_cookies')
  localStorage.clear()
}
