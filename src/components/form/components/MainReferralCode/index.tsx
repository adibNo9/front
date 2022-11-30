import { ChangeEvent, FocusEvent, FC } from 'react'
import MainButton, { ButtonType } from '@components/ui/MainButton'
import { ReferralType } from '@framework/types'
import MainInput from '@components/ui/MainInput/index'
import { useLogic } from './hooks/useLogic'
import styles from './styles.module.scss'

interface IMainReferralCode {
  id: string,
  label: string,
  value?: string,
  onChange: (e: ChangeEvent<HTMLInputElement>, textValue: string) => void,
  onBlur: (e: FocusEvent<HTMLInputElement>) => void,
  onFocus: (e: FocusEvent<HTMLInputElement>) => void,
  validationError?: string,
  error?: boolean
}

const MainReferralCode: FC<IMainReferralCode> = ({
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
  const {
    textValue,
    isVisible,
    handleChange,
    handleClick,
    iconName
  } = useLogic({ value, label, onChange })

 const type: ReferralType['text'] = 'text'

  return (
    <div className={styles['form-referral-code-wrapper']}>
      <div id={styles['header']}>
        <label>{label}</label>
        <MainButton
          type={ButtonType.icon}
          iconName={iconName}
          iconCustomClassName={styles['icon']}
          onClick={handleClick}
        />
      </div>
      {
        isVisible &&
        <div className={styles['referral-input-wrapper']}>
          <MainInput
            id={id}
            regEx={'^[A-Za-z0-9]*$'}
            type={type}
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

export default MainReferralCode
