import React, { useState, useMemo } from 'react'
import { reDigit } from '../constants'

export const useLogic = (
  value: string,
  valueLength: number,
  onChange: (value: string) => void,
  validationFn: (validation: boolean) => void,
  validCode: string,
) => {
  const [isValid, setIsValid] = useState<boolean>(true)
  const valueItems = useMemo(() => {
    const valueArray = value?.split('')
    const items: Array<string> = []

    for (let i = 0; i < valueLength; i++) {
      const char = valueArray?.[i]

      if (reDigit.test(char)) {
        items.push(char)
      } else {
        items.push('')
      }
    }

    return items
  }, [value, valueLength])

  const focusToNextInput = (target: HTMLElement) => {
    const nextElementSibling =
      target.nextElementSibling as HTMLInputElement | null

    if (nextElementSibling) {
      nextElementSibling.focus()
    }
  }
  const focusToPrevInput = (target: HTMLElement) => {
    const previousElementSibling =
      target.previousElementSibling as HTMLInputElement | null

    if (previousElementSibling) {
      previousElementSibling.focus()
    }
  }

  const inputOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number,
  ) => {
    const target = e.target
    let targetValue = target.value
    const isTargetValueDigit = reDigit.test(targetValue)

    if (!isTargetValueDigit && targetValue !== '') {
      return
    }

    const nextInputEl = target.nextElementSibling as HTMLInputElement | null

    if (!isTargetValueDigit && nextInputEl && nextInputEl.value !== '') {
      return
    }

    targetValue = isTargetValueDigit ? targetValue : ' '

    const targetValueLength = targetValue.length

    if (targetValueLength === 1) {
      const newValue =
        value.substring(0, idx) + targetValue + value.substring(idx + 1)

      onChange(newValue)

      if (!isTargetValueDigit) {
        return
      }
      if (!nextInputEl) {
        target.blur()
        validationFn?.(validCode === newValue)
        if (validCode === newValue) {
          setIsValid(true)
        } else {
          setIsValid(false)
        }
      }

      focusToNextInput(target)
    } else if (targetValueLength === valueLength) {
      onChange(targetValue)

      target.blur()
    }
  }

  const inputOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e
    const target = e.target as HTMLInputElement

    if (key === 'ArrowRight' || key === 'ArrowDown') {
      e.preventDefault()
      return focusToNextInput(target)
    }

    if (key === 'ArrowLeft' || key === 'ArrowUp') {
      e.preventDefault()
      return focusToPrevInput(target)
    }

    const targetValue = target.value

    target.setSelectionRange(0, targetValue.length)

    if (e.key !== 'Backspace' || targetValue !== '') {
      return
    }

    focusToPrevInput(target)
  }

  const inputOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const { target } = e

    const prevInputEl = target.previousElementSibling as HTMLInputElement | null

    if (prevInputEl && prevInputEl.value === '') {
      return prevInputEl.focus()
    }

    target.setSelectionRange(0, target.value.length)
  }

  return {
    valueItems,
    inputOnChange,
    inputOnKeyDown,
    inputOnFocus,
    validationFn,
    isValid,
  }
}
