import { FieldProps, SelectFieldType } from '@components/form/formTypes'
import { useFormContext } from 'react-hook-form'
import React, { useMemo } from 'react'
import FormControl from '@components/form/components/FormControl'
import FormLabel from '@components/form/components/FormLabel'
import FormHelper from '@components/form/components/FormHelper'
import { useErrorMessage } from '@components/form/hooks/useErrorMessage'
import FormError from '@components/form/components/FormError'

export const SelectField: React.FC<FieldProps<SelectFieldType>> = ({
  field,
}) => {
  const { name, className, label, helper, shouldDisplay, validations } = field

  const { register, watch } = useFormContext()
  const errorMessage = useErrorMessage(name)
  const values = watch(name)

  const isVisible = useMemo(() => {
    return shouldDisplay ? shouldDisplay(values) : true
  }, [values, shouldDisplay])

  return isVisible
    ? (
    <div
      className={`flex flex-col w-full justify-between my-5 border-light-200 ${
        className ?? ' '
      }`}
    >
      <FormControl key={'eeee'}>
        {!!label && (
          <FormLabel name={name} key={'label-key' + name} label={label} />
        )}
        <select
          className={`flex border-2 border-gray-300 rounded-lg p-3 bg-none w-full ${
            className ?? ' '
          }`}
          {...register(name, {
            disabled: validations?.disabled,
            max: validations?.max,
            min: validations?.min,
            minLength: validations?.minLength,
            maxLength: validations?.maxLength,
            pattern: validations?.pattern,
            required: validations?.required,
            value: field.value,
            onChange: field.onChange,
          })}
        >
          {field.options?.map((option: { value: any; label: any }) => (
            <option key={option.value} value={option.value}>
              {option.label || option.value}
            </option>
          ))}
        </select>
      </FormControl>
      {!!helper && <FormHelper helper={helper} />}
      <FormError error={errorMessage} />
    </div>
      )
    : null
}
