import { ChangeEvent, useState } from "react";

interface IFormReferralCodeLogic {
    value?: string,
    onChange: (e: ChangeEvent<HTMLInputElement>, textValue: string) => void,
}


export const useLogic = ({
  value,
  onChange,

}: IFormReferralCodeLogic) => {
  const [textValue, setTextValue] = useState<string>(value || '');
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTextValue(event.target.value);
    onChange?.(event, textValue);
  }

  const handleClick = () => {
    const EMPTY_TEXT = '';
    setIsVisible(!isVisible);
    isVisible || setTextValue(EMPTY_TEXT);
  }

  const iconName: string = isVisible ? 'xmark' : 'plus';

  return { textValue, isVisible, handleChange, handleClick, iconName };

}