import MainInput from '@components/form/components/MainInput'
import MainButton, { ButtonType } from '@components/ui/MainButton'
import MainText from '@components/ui/MainText'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { ILoginStep, LoginStepContext } from 'src/pages/login'
import styles from './FormTabs.module.scss'

type FormData = {
  nationalCode: number
  password: number
}

export default function LoginForm() {
  const { setLoginStep } = useContext(LoginStepContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()
  const onSubmit = handleSubmit(data => {
    //TODO login request
  })

  return (
    <div className={styles['login-form-container']}>
      <form onSubmit={onSubmit}>
        <MainInput
          {...register('nationalCode', {
            required: 'لطفا کد ملی خود را وارد کنید',
          })}
          label="کدملی"
          error={!!errors?.nationalCode}
          validationError={errors?.nationalCode?.message}
          regEx="^[0-9]*$"
          maxLength={10}
        />
        <MainInput
          {...register('password', { required: true })}
          label="رمزعبور"
          error={!!errors?.password}
          type="password"
          validationError={'لطفا رمز عبور خود را وارد کنید'}
          extraComponent={
            <MainButton
              type={ButtonType.text}
              onClick={() => {
                setLoginStep(ILoginStep.changePassword)
              }}
              text="فراموشی رمز عبور"
            />
          }
        />
        <MainButton
          customClassName={styles['login-button']}
          type={ButtonType.textStruckDark}
          text="ورود"
        />
      </form>
      <MainButton
        type={ButtonType.textIcon}
        onClick={e => {}}
        customClassName={styles['login-arrow-button']}
        iconName="arrow-left"
        text=" ورود با رمز یکبار مصرف"
      />
      <MainText
        color="black"
        size="12px"
        weight="bold"
        children={`حساب کاربری ندارید؟ ثبت نام کنید و 7 روز اشتراک هدیه بگیرید`}
      />
    </div>
  )
}
