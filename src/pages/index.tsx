import React, { useState } from 'react'
import TextField from '@components/form/components/MainTextField'

const index = () => {
  const [value, setValue] = useState<string>('')

  const error = false

  return (
    <div>
      <TextField
        label="کد ملی"
        id="national-code"
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        onBlur={() => console.log('blur')}
        onFocus={() => console.log('focus')}
        validationError={error && 'چیزی را اشتباه وارد کردیدو دوباره سعی کنید'}
        error={error}
      />
    </div>
  )
}

export default index
