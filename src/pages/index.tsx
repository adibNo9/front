import React, { useState } from 'react'
import MainOtp from '@components/form/components/MainOtp'

const index = () => {
  const [otp, setOtp] = useState('')
  const onChange = (value: string) => setOtp(value)

  const resendCodeClickHandler = () => {
    //desired function to be performed on clicking resend button
    console.log('resend code')
  }
  return (
    <div>
      <MainOtp
        value={otp}
        valueLength={5}
        onChange={onChange}
        resendOtpCode={resendCodeClickHandler}
      />
    </div>
  )
}

export default index
