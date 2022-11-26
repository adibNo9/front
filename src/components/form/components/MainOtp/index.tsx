//@ts-ignore
import OtpTimer from 'otp-timer'

import styles from './styles.module.scss'
import { useLogic } from './hooks/useLogic'

export interface IOtp {
  seconds: number
  minutes?: number
  value: string
  valueLength: number
  onChange: (value: string) => void
  resendOtpCode?: () => void
}

const MainOtp: React.FC<IOtp> = ({
  seconds,
  minutes,
  value,
  valueLength,
  onChange,
  resendOtpCode,
}) => {
  const { valueItems, inputOnChange, inputOnKeyDown, inputOnFocus } = useLogic(
    value,
    valueLength,
    onChange,
  )

  return (
    <>
      <div className={styles['otp-wrapper']} dir="ltr">
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
