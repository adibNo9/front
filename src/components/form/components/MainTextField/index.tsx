import React from 'react'
import { useTranslation } from 'next-i18next'
import classNames from 'classnames'
import styles from './styles.module.scss'

export interface IMainInput {
  label?: string
  id?: string
  name?: string
  type?: string
  defaultValue?: string | number
  onChange?: () => void
  onBlur?: () => void
  onFocus?: () => void
  validationError?: string
  error?: boolean
  pattern: string
}

const MainInput = React.forwardRef<HTMLInputElement, IMainInput>(
  (
    {
      label,
      id,
      type,
      defaultValue,
      onChange,
      onBlur,
      onFocus,
      validationError = '',
      error,
      pattern,
      ...props
    },
    ref,
  ) => {
    const errorStyle = classNames({
      error: error,
    })
    const { t } = useTranslation('common')
    return (
      <div
        className={[styles['textInput-wrapper'], styles[errorStyle]].join(' ')}
      >
        <label htmlFor={id}>
          <p>{t(label ?? '')}</p>
        </label>
        <input
          ref={ref}
          id={id}
          type={type}
          defaultValue={defaultValue}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          pattern={pattern}
          {...props}
        />
        {error && (
          <p id={id}>
            <span>{t(validationError)}</span>
          </p>
        )}
      </div>
    )
  },
)

export default MainInput
