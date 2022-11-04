import Cookies from 'js-cookie'

export const getCookies = (name: string) => {
  return Cookies.get(name)
}
