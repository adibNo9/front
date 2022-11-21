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
}

const MainInput: React.FC<IMainInput> = ({
  label,
  id,
  type,
  defaultValue,
  onChange,
  onBlur,
  onFocus,
  name,
  validationError = '',
  error,
  ...props
}) => {
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
        id={id}
        name={name}
        type={type}
        defaultValue={defaultValue}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        {...props}
      />
      <p id={id}>
        <span>{validationError}</span>
      </p>
    </div>
  )
}

export default MainInput
