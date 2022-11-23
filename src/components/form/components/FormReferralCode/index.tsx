import MainButton, { ButtonType } from '@components/ui/MainButton'
import { ChangeEvent, FC, useState } from 'react'
import MainInput from '../MainTextField'
import styles from './styles.module.scss'

interface IFormReferralCode {
  id: string,
  label: string,
  value?: string,
  onChange: (e: ChangeEvent<HTMLInputElement>, textValue: string) => void,
  onBlur: () => void,
  onFocus: () => void,
  validationError?: string
  error?: boolean
}

const FormReferralCode: FC<IFormReferralCode> = ({
  id,
  label,
  onChange,
  onBlur,
  onFocus,
  value,
  validationError,
  error,
  ...otherProps
}) => {
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

  return (
    <div className={styles['form-referral-code-wrapper']}>
      <div id={styles['header']}>
        <label>{label}</label>
        <MainButton
          type={ButtonType.icon}
          iconName={iconName}
          customClassName={styles['icon']}
          onClick={handleClick}
        />
      </div>
      {
        isVisible &&
        <div className={styles['referral-input-wrapper']}>
          <MainInput
            id={id}
            type='text'
            value={textValue}
            onBlur={onBlur}
            onFocus={onFocus}
            onChange={handleChange}
            validationError={validationError}
            error={error}
            {...otherProps}
          />
        </div>
      }
    </div>
  )
}

export default FormReferralCode
