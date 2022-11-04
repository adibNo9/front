import React, { useMemo } from 'react'
import { useFormContext } from 'react-hook-form'

import { FieldProps, TextAreaFieldType } from '@components/form/formTypes'
import FormControl from '@components/form/components/FormControl'
import FormLabel from '@components/form/components/FormLabel'
import FormHelper from '@components/form/components/FormHelper'
import { useErrorMessage } from '@components/form/hooks/useErrorMessage'
import FormError from '@components/form/components/FormError'

export const TextAreaField: React.FC<FieldProps<TextAreaFieldType>> = ({
  field,
}) => {
  const {
    name,
    className,
    label,
    placeholder,
    helper,
    shouldDisplay,
    validations,
  } = field

  const { register, watch } = useFormContext()
  const errorMessage = useErrorMessage(name)
  const values = watch(name)

  const isVisible = useMemo(() => {
    return shouldDisplay ? shouldDisplay(values) : true
  }, [values, shouldDisplay])

  return isVisible
    ? (
    <div
      className={`flex justify-between my-5 border-doted border-light-200 ${
        className ?? ' '
      }`}
    >
      <FormControl key={'eeee'}>
        {!!label && (
          <FormLabel name={name} key={'label-key' + name} label={label} />
        )}
        <textarea
          rows={field.rows}
          className={'w-full border-2 border-gray-300 rounded-lg p-3 bg-none'}
          placeholder={placeholder}
          {...register(name, {
            disabled: validations?.disabled,
            max: validations?.max,
            min: validations?.min,
            minLength: validations?.minLength,
            maxLength: validations?.maxLength,
            pattern: validations?.pattern,
            required: validations?.required,
            value: field.value,
          })}
        />
        {!!helper && <FormHelper helper={helper} />}
        <FormError error={errorMessage} />
      </FormControl>
    </div>
      )
    : null
}
