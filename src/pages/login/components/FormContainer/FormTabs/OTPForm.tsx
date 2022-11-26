import { useState } from 'react'
import MainOtp from '@components/form/components/MainOtp'
import MainButton, { ButtonType } from '@components/ui/MainButton'
import MainText from '@components/ui/MainText'
import styles from './FormTabs.module.scss'

export default function OTPForm() {
  const [value, setValue] = useState<string>('')
  return (
    <div dir="rtl" className={styles['login-form-container']}>
      <MainText
        color="black"
        size="14px"
        weight="bold"
        children="کد تایید ارسال شد"
      />
      <MainOtp
        seconds={15}
        onChange={e => {
          setValue(e?.target?.value)
        }}
        resendOtpCode={() => {}}
        valueLength={5}
        value={value}
      />

      <MainButton
        customClassName={styles['login-button']}
        type={ButtonType.textStruckDark}
        text="ثبت و انتخاب رمز"
      />
    </div>
  )
}
