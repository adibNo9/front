import http from '@framework/utils/http'
import { useMutation, UseMutationOptions } from 'react-query'
import { useCallback } from 'react'
import { ApiInfo, ApiType } from '@framework/utils/api.types'
import { ApiInfoInterface } from '@framework/types'

export function post(path: string, input: any) {
  return http.post(path, input)
}

export const get = async(path: string) => {
  const { data } = await http.get(path)
  return data.items
}

export const put = async(path: string, input: any) => {
  const { data } = await http.put(path, input)
  return data
}

export const deleteFunc = async(path: string) => {
  const { data } = await http.delete(path)
  return data.items
}

export default function callMutation(
  mutation: ApiType,
  options:
    | Omit<
        UseMutationOptions<
          any,
          unknown,
          {
            body?: { [key: string]: any } | undefined
            ID?: { [key: string]: string } | undefined
          },
          unknown
        >,
        'mutationFn'
      >
    | undefined,
) {
  const info: ApiInfoInterface = ApiInfo[mutation]
  const mutationFn = useCallback(
    (variables: {
      body?: { [key: string]: any } | [{ [key: string]: any }]
      ID?: { [key: string]: string }
    }) => {
      const { method } = info
      let path = info.path
      let request

      if (variables.ID) {
        const ID = variables.ID
        Object.keys(variables.ID).forEach((key: string) => {
          const regex = new RegExp(`:${key}`, 'g')
          path = path.replace(regex, ID[key])
        })
      }

      switch (method) {
        case 'GET':
          request = get(path)
          break
        case 'POST':
          request = post(path, variables.body)
          break
        case 'PUT':
          request = put(path, variables.body)
          break
        case 'DELETE':
          request = deleteFunc(path)
          break
      }

      // @ts-ignore
      return request
        .then(res => {
          return res
        })
        .catch(error => {

        })
    },
    [mutation],
  )

  return useMutation(mutationFn, options)
}

export const handleError = (
  error: { response: { data: { message: any }; status: any } },
  errorFire: (arg0: { message: any; code: any }) => void,
) => {
  errorFire({
    message: error.response.data.message,
    code: error.response.status,
  })
  return error
}
