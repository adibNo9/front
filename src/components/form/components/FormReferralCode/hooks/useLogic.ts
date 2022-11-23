import { useTranslation } from 'next-i18next';
import { ChangeEvent, useState } from 'react';

interface IFormReferralCodeLogic {
    value?: string,
    label: string,
    onChange: (e: ChangeEvent<HTMLInputElement>, textValue: string) => void,
}


export const useLogic = ({
  value,
  label,
  onChange,
}: IFormReferralCodeLogic) => {
  const [textValue, setTextValue] = useState<string>(value || '');
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const { t } = useTranslation();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTextValue(event.target.value);
    onChange?.(event, textValue);
  }

  const handleClick = () => {
    setIsVisible(!isVisible);
   if (isVisible){onChange?.("");  setTextValue( '');}
  }

  const iconName: string = isVisible ? 'xmark' : 'plus';

  const labelText: string = t(label);

  return { textValue, isVisible, handleChange, handleClick, iconName, labelText };

}