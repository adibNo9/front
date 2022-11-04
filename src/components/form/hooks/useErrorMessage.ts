import { useFormContext } from 'react-hook-form'

export const useErrorMessage = (name: string) => {
  const { formState: { errors } } = useFormContext()

  const error = errors[name]
  if (!error) return undefined
  return error.message
}
