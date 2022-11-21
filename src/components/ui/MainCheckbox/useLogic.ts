
import { useTranslation } from 'next-i18next';
import React, { useState } from 'react';

export const useLogic = (
  defaultValue: boolean,
  onChange: (() => void) | undefined,
  label: string| undefined
) => {
  const [isChecked, setIsChecked] = useState<boolean>(defaultValue);
  const [translate] = useTranslation()

  const handleChange = (): void => {
    setIsChecked(!isChecked);
    onChange?.();
  }

  const labelText = translate(label);

  return {isChecked , setIsChecked, handleChange, labelText}
}