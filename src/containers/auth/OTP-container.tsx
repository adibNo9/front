import { useState } from 'react'
import MainText from '@components/ui/MainText'
import styles from './styles/style.module.scss'
import Form from '@components/form/components/form'

export default function OTPForm() {
  const [value, setValue] = useState<string>('')

  const Schema = [
    {
      id: 'group-1',
      type: 'group',
      className: 'w-1/2',
      elements: [
        {
          id: '1',
          name: 'otp',
          seconds: 15,
          valueLength: 5,
          type: 'otp',
          onChange: (value:any) => {
            setValue(value)
          },
          value: { value },
        },
      ],
    },
  ]
  const handleSubmit = values => {
    // setLoginStep(ILoginStep.otp)
  }
  return (
    <div className={styles['login-form-container']}>
      <MainText
        color="black"
        size="14px"
        weight="bold"
        children="کد تایید ارسال شد"
      />
        <Form
            formOptions={{
              mode: 'onChange',
            }}
            schema={Schema}
            onSubmit={handleSubmit}
            primaryButton='ثبت و انتخاب رمز'
        />
    </div>
  )
}
