import { FieldProps, SelectFieldType } from '@components/form/formTypes'
import { useFormContext } from 'react-hook-form'
import React, { useMemo } from 'react'
import FormControl from '@components/form/components/FormControl'
import FormLabel from '@components/form/components/FormLabel'
import FormHelper from '@components/form/components/FormHelper'
import { useErrorMessage } from '@components/form/hooks/useErrorMessage'
import FormError from '@components/form/components/FormError'
import styles from './styles.module.scss'

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

  return isVisible ? (
    <FormControl key={'eeee'}>
      <div className={styles['field-wrapper']}>
        {!!label && (
          <FormLabel name={name} key={'label-key' + name} label={label} />
        )}
        <select
          className={[styles['select-field'], styles[className ?? '']].join(
            ' ',
          )}
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
        {!!helper && <FormHelper helper={helper} />}
        <FormError error={errorMessage ?? 'error'} />
      </div>
    </FormControl>
  ) : null
}
