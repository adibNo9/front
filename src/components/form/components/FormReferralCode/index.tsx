import { ChangeEvent, FC } from 'react'
import MainInput from '../MainTextField'
import styles from './styles.module.scss'

interface IFormReferralCode {
    id: string,
    label: string,
    value?: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    onBlur: () => void
    onFocus: () => void
}

const FormReferralCode: FC<IFormReferralCode> = ({
  id,
  label,
  onChange,
  onBlur,
  onFocus,
  value,
  ...otherProps
}) => {
  return (
        <div className={styles['form-referral-code']}>
            <label>{label}</label>
            <MainInput
                id={id}
                type='number'
                value={value || ''}
                onBlur={onBlur}
                onFocus={onFocus}
                onChange={onChange}
                {...otherProps}
            />
        </div>
  )
}

export default FormReferralCode
