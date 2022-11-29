import React, { useMemo } from 'react'
import { useFormContext } from 'react-hook-form'

import { FieldProps, TextFieldType } from '@components/form/formTypes'
import FormControl from '@components/form/components/FormControl'
import FormLabel from '@components/form/components/FormLabel'
import FormHelper from '@components/form/components/FormHelper'
import { useErrorMessage } from '@components/form/hooks/useErrorMessage'
import FormError from '@components/form/components/FormError'

export const TextField: React.FC<FieldProps<TextFieldType>> = ({ field }) => {
  const {
    name,
    type,
    className,
    label,
    extraComponent,
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
        {extraComponent}
        <input
            type={type}
          className={className}
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
            validate: validations?.validate,
          })}
        />
        {!!helper && <FormHelper helper={helper} />}
        <FormError error={errorMessage} />
      </FormControl>
    </div>
      )
    : null
}
