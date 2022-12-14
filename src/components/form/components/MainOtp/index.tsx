// @ts-ignore
import OtpTimer from 'otp-timer'

import styles from './styles.module.scss'
import { useLogic } from './hooks/useLogic'
import classNames from 'classnames'

export interface IOtp {
  value: string
  valueLength: number
  validCode: string
  onChange: (value: string) => void
  validationFn: (validation: boolean) => void
  resendOtpCode?: () => void
}

const MainOtp: React.FC<any> = ({ field }) => {
  const { seconds, minutes, value, valueLength, onChange, resendOtpCode } =
    field
  const { valueItems, inputOnChange, inputOnKeyDown, inputOnFocus } = useLogic(
    value.value,
    valueLength,
    onChange,
  )
  console.log(seconds, valueLength, valueItems)
  return (
    <>
      <div className={styles['otp-wrapper']} dir="ltr">
        {valueItems?.map((digit, idx) => (
          <input
            required
            key={idx}
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            pattern="\d{1}"
            maxLength={valueLength}
            onChange={e => inputOnChange(e, idx)}
            onKeyDown={inputOnKeyDown}
            onFocus={inputOnFocus}
            value={digit}
          />
        ))}
      </div>
      <div className={styles['timer-wrapper']}>
        <OtpTimer
          textColor={'#464646'}
          background={'#fff'}
          buttonColor={'#a8a8a8'}
          seconds={seconds}
          minutes={minutes}
          text="ثانیه  "
          ButtonText="کد دریافت نکرده اید؟ ارسال مجدد"
          resend={resendOtpCode}
        />
      </div>
    </>
  )
}

export default MainOtp
