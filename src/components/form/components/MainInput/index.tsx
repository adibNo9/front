import React, { useState, useEffect } from 'react'

import classNames from 'classnames'
import styles from './styles.module.scss'

export interface IMainInput {
  extraComponent?: React.ReactElement
  value: string
  regEx: string
  label?: string
  id: string
  type: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void
  onFocus: (e: React.FocusEvent<HTMLInputElement>) => void
  validationError?: string
  error?: boolean
}

const MainInput = React.forwardRef<HTMLInputElement, IMainInput>(
  (
    {
      extraComponent,
      value,
      regEx,
      label,
      id,
      type,
      onChange,
      onBlur,
      onFocus,
      validationError = '',
      error,
      ...props
    },
    ref,
  ) => {
    const [inputValue, setInputValue] = useState<string>('')
    const regExp = new RegExp(regEx)

    useEffect(() => {
      const isTargetValueDigit = regExp.test(value)

      if (!isTargetValueDigit && value !== '') {
        return
      }
      setInputValue(value)
    }, [])

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      const target = e.target
      let targetValue = target.value

      const isTargetValueDigit = regExp.test(targetValue)

      if (!isTargetValueDigit && targetValue !== '') {
        return
      }
      setInputValue(e.target.value)
      onChange?.(e)
    }
    const errorStyle = classNames({
      error: error,
    })

    return (
      <div
        className={[styles['textInput-wrapper'], styles[errorStyle]].join(' ')}
      >
        <div className={styles['label-wrapper']}>
          <label htmlFor={id}>
            <p>{label}</p>
          </label>
          {extraComponent}
        </div>
        <input
          pattern={regEx}
          id={id}
          type={type}
          value={inputValue}
          ref={ref}
          onChange={changeHandler}
          onBlur={onBlur}
          onFocus={onFocus}
          {...props}
        />
        <p id={id}>
          <span>{validationError}</span>
        </p>
      </div>
    )
  },
)

export default MainInput
