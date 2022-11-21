import { SyntheticEvent, useState } from 'react';
import { useTranslation } from 'next-i18next'



export const useLogic = (

) => {
  const [value, setValue] = useState(0);
  // Todo[AliMoghimi] translation.
  const [translate] = useTranslation();

  const register: string = translate('ثبت نام');
  const login: string = translate('ورود');

  const handleChange = (event: SyntheticEvent, newValue: number): void => {
    setValue(newValue);
  };

  const getTabProps = (index: number) => {
    return {
      id: `tab-${index}`,
      'aria-controls': `tabpanel-${index}`,
    };
  }

  return { value, setValue, register, login , handleChange, getTabProps}
}