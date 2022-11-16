import React from 'react'

import classNames from 'classnames'
import styles from './styles.module.scss'

export interface ITextField {
  label?: string
  id: string
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur: () => void
  onFocus: () => void
  validationError?: string
  error?: boolean
}

const TextField: React.FC<ITextField> = ({
  label,
  id,
  type,
  value,
  onChange,
  onBlur,
  onFocus,
  validationError = '',
  error,
  ...props
}) => {
  const errorStyle = classNames({
    error: error,
  })

  return (
    <div
      className={[styles['textInput-wrapper'], styles[errorStyle]].join(' ')}
    >
      <label htmlFor={id}>
        <p>{label}</p>
      </label>
      <input
        id={id}
        type={type}
        value={value}
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

export default TextField
