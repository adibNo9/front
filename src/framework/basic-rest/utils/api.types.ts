import { ApiInfoInterface } from '@framework/types'

export type ApiType =
  // Student

  | 'Sample'

// eslint-disable-next-line
export const ApiInfo: { [key in ApiType]: ApiInfoInterface } = {
  Sample: {
    method: 'GET',
    path: 'api/web/student/v1/sample',
  },

}
