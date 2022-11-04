
export type ApiMethods = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export interface ApiInfoInterface {
  server?: 'apiUrl'
  method: ApiMethods
  path: string
  params?: { [key: string]: boolean }
}

export type User = {
  address: string
  bank: string
  birthdate: string
  cart: string
  city_id: string
  created_at: string
  education: string
  email: string
  first_name: string
  full_name: string
  gender: string
  iban: string
  id: number
  last_name: string
  mobile: string
  national_id: string
  state_id: string
  status: 10 | 1
  username: string
  verified_mobile: 0 | 1
  verified_nid: 0 | 1

}
export type UserInfo = {
  roles: any
  sidebar_menu: any
  user: User
}
