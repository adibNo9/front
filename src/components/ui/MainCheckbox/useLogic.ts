
import { SyntheticEvent, useState } from 'react'
import { useTranslation } from 'next-i18next'
import classNames from 'classnames'

interface IUseLogic {
  defaultValue?: boolean,
  onChange?: ((e: SyntheticEvent ,isChecked: boolean) => void) | undefined,
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

  const handleChange = (event: SyntheticEvent): void => {
    if (!disabled) {
      setIsChecked(!isChecked)
      onChange?.(event, !isChecked)
    }
  }

  const labelText = translate(label ?? '')

  const disabledCLassName = classNames({
    'disabled-check-box': disabled,
  })

  return { isChecked, handleChange, labelText, disabledCLassName, }
}