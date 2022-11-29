import MainInput from '@components/ui/MainInput'
import MainButton, { ButtonKind } from '@components/ui/MainButton'
import MainText from '@components/ui/MainText'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { ILoginStep, LoginStepContext } from 'src/pages/auth'
import styles from './styles/style.module.scss'

type FormData = {
  nationalCode: number
  password: number
}

export default function ForgetPassWordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()
  const onSubmit = handleSubmit(data => {
    //TODO login request
  })
  const { setLoginStep } = useContext(LoginStepContext)
  return (
    <div className={styles['login-form-container']}>
      <MainText
        color="black"
        size="12px"
        weight="bold"
        children="کد ملی را وارد کرده و روش ارسال کدتایید را انتخاب کنید"
      />
      <form onSubmit={onSubmit}>
        <MainInput
          {...register('nationalCode', { required: true })}
          label="کدملی"
          error={!!errors?.nationalCode}
          validationError={'لطفا کد ملی خود را وارد کنید'}
          regEx="^[0-9]*$"
          maxLength={10}
          customClassName={styles['forget-password-input']}
        />
      </form>
      <MainButton
        customClassName={styles['login-button']}
        kind={ButtonKind.textStruckDark}
        text="ارسال کد به تلفن همراه"
        onClick={() => {
          setLoginStep(ILoginStep.otp)
        }}
      />
      <MainButton
        kind={ButtonKind.textIcon}
        onClick={() => {
          setLoginStep(ILoginStep.otp)
        }}
        customClassName={styles['login-arrow-button']}
        iconName="arrow-left"
        text="ارسال کد به ایمیل"
      />
    </div>
  )
}
