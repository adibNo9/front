import { useState } from 'react';
import { useTranslation } from 'next-i18next'



export const useLogic = (

) => {
  const [value, setValue] = useState(0);
  // Todo[AliMoghimi] translation.
  const [translate] = useTranslation();

  const register: string = translate('ثبت نام');
  const login: string = translate('ورود');

  const handleChange = (event: React.SyntheticEvent, newValue: number): void => {
    setValue(newValue);
  };

  return { value, setValue, register, login , handleChange}
}