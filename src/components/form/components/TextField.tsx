import React, { useMemo } from 'react'
import { useFormContext } from 'react-hook-form'

import { FieldProps, TextFieldType } from '@components/form/formTypes'
import FormControl from '@components/form/components/FormControl'
import FormLabel from '@components/form/components/FormLabel'
import FormHelper from '@components/form/components/FormHelper'
import { useErrorMessage } from '@components/form/hooks/useErrorMessage'
import FormError from '@components/form/components/FormError'
import styles from './styles.module.scss'
import classNames from 'classnames'

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

  const errorStyle = classNames({
    'validation-error': errorMessage,
  })

  const inputStyle = classNames({
    'text-field': type !== 'checkbox',
  })

  const checkboxStyle = classNames({
    'checkbox-field': type === 'checkbox',
  })

  return isVisible ? (
    <FormControl className={errorStyle} key={'eeee'}>
      {/* TODO [adib] update checkbox styles */}
      <div
        className={[styles['field-wrapper'], styles[checkboxStyle]].join(' ')}
      >
        <div className={styles[`label-wrapper`]}>
          {!!label && (
            <FormLabel name={name} key={'label-key' + name} label={label} />
          )}
          {extraComponent}
        </div>

        <input
          type={type}
          className={[styles[inputStyle], className].join(' ')}
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
        <FormError className={errorStyle} error={errorMessage ?? 'error'} />
      </div>
    </FormControl>
  ) : null
}
