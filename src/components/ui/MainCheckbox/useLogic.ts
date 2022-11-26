
import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import classNames from 'classnames'

interface IUseLogic {
  defaultValue?: boolean,
  onChange?: ((isChecked: boolean) => void) | undefined,
  label: string | undefined,
  disabled?: boolean,
}

export const useLogic = ({
  defaultValue = false,
  onChange,
  label,
  disabled,
}: IUseLogic) => {
  const [isChecked, setIsChecked] = useState<boolean>(defaultValue)
  const [translate] = useTranslation()

  const handleChange = (): void => {
    if (!disabled) {
      setIsChecked(!isChecked)
      onChange?.(!isChecked)
    }
  }

  const labelText = translate(label ?? '')

  const disabledCLassName = classNames({
    'disabled-check-box': disabled,
  })

  return { isChecked, handleChange, labelText, disabledCLassName, }
}