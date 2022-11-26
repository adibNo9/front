import MainInput from '@components/form/components/MainInput'
import MainButton, { ButtonType } from '@components/ui/MainButton'
import MainText from '@components/ui/MainText'
import { useForm } from 'react-hook-form'
import styles from './FormTabs.module.scss'

type FormData = {
  nationalCode: number
  password: number
}

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()
  const onSubmit = handleSubmit(data => {
    //TODO login request
  })

  return (
    <div dir="rtl" className={styles['login-form-container']}>
      <form onSubmit={onSubmit}>
        <MainInput
          {...register('nationalCode', { required: true })}
          label="کدملی"
          error={!!errors?.nationalCode}
          validationError={'لطفا کد ملی خود را وارد کنید'}
          pattern="[0-9]"
        />
        <MainInput
          {...register('password', { required: true })}
          label="رمزعبور"
          error={!!errors?.password}
          validationError={'لطفا رمز عبور خود را وارد کنید'}
        />
        <MainButton
          customClassName={styles['login-button']}
          type={ButtonType.textStruckDark}
          text="ورود"
        />
      </form>
      <MainButton
        type={ButtonType.textIcon}
        onClick={() => {}}
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
