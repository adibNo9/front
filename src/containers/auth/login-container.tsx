import MainButton, { ButtonKind } from '@components/ui/MainButton'
import MainText from '@components/ui/MainText'
import { useContext } from 'react'
import { ILoginStep, LoginStepContext } from 'src/pages/auth'
import styles from './styles/style.module.scss'
import Form from '@components/form/components/form'

export default function LoginForm() {
  const { setLoginStep } = useContext(LoginStepContext)

  const forgetPassWord = (
    <MainButton
      kind={ButtonKind.text}
      onClick={() => {
        setLoginStep(ILoginStep.forgetPassWord)
      }}
      text="فراموشی رمز عبور"
    />
  )

  const Schema = [
    {
      id: 'group-1',
      type: 'group',
      className: 'w-72 sm:w-96',
      elements: [
        {
          id: '1',
          name: 'nationalCode',
          value: '',
          type: 'text',
          label: 'کدملی',
          validations: {
            required: 'لطفا کد ملی خود را وارد کنید',
            pattern: {
              value: /^[0-9]*$/i,
              message: 'forms.natioo',
            },
            maxLength: {
              value: 10,
              required: ' کد ملی باید 10 کاراکتر باشد',
              message: '',
            },
          },
        },
        {
          id: '2',
          name: 'password',
          value: '',
          type: 'password',
          label: 'رمز عبور',
          validations: {
            required: 'لطفا رمز عبور خود را وارد کنید',
          },
          extraComponent: forgetPassWord,
        },
      ],
    },
  ]

  const handleSubmit = values => {
    setLoginStep(ILoginStep.otp)
  }

  return (
    <div className={styles['login-form-container']}>
      <Form
        formOptions={{
          mode: 'onChange',
        }}
        schema={Schema}
        onSubmit={handleSubmit}
        primaryButton="ورود"
      />
      <MainText
        color="black"
        size="12px"
        weight="bold"
        children={'حساب کاربری ندارید؟ ثبت نام کنید و 7 روز اشتراک هدیه بگیرید'}
      />
    </div>
  )
}
