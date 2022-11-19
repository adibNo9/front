import React, { useState } from 'react'
import MainOtp from '@components/form/components/MainOtp'

const index = () => {
  const [otp, setOtp] = useState('')
  const onChange = (value: string) => setOtp(value)
  return (
    <div>
      <MainOtp value={otp} valueLength={6} onChange={onChange} />
    </div>
  )
}

export default index
