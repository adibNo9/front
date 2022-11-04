import Cookies from 'js-cookie'

export const getFullName = () => {
  return Cookies.get('full_name')
}
