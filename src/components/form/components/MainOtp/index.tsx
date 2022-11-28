//@ts-ignore
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

const MainOtp: React.FC<IOtp> = ({
  value,
  valueLength,
  onChange,
  validCode,
  validationFn,
  resendOtpCode,
}) => {
  const seconds = process.env.NEXT_PUBLIC_REST_API_ENDPOINT
  const minutes = process.env.OTP_TIMER_MINUTES
  const { valueItems, inputOnChange, inputOnKeyDown, inputOnFocus, isValid } =
    useLogic(value, valueLength, onChange, validationFn, validCode)
  const errorValidation = classNames({
    'error-validation': !isValid,
  })

  return (
    <>
      <div
        className={[styles['otp-wrapper'], styles[errorValidation]].join(' ')}
        dir="ltr"
      >
        {valueItems.map((digit, idx) => (
          <input
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
