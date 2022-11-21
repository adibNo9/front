
import React, { useState } from 'react';

export const useLogic = (
  defaultValue: boolean,
  onChange: (() => void) | undefined,
) => {

  const [isChecked, setIsChecked] = useState<boolean>(defaultValue);

  const handleChange = (): void => {
    setIsChecked(!isChecked);
    onChange?.();
  }

  return {isChecked , setIsChecked, handleChange}
}