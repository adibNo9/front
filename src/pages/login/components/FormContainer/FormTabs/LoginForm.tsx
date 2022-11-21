import MainInput from '@components/form/components/MainTextField'
import MainButton, { ButtonType } from '@components/ui/MainButton'
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
  const onSubmit = handleSubmit(data => console.log(data))
  // firstName and lastName will have correct type
  console.log('here', errors?.nationalCode)

  return (
    <div dir="rtl" className={styles['login-form-container']}>
      <form onSubmit={onSubmit}>
        <MainInput
          {...register('nationalCode', { required: true })}
          label="کدملی"
          error={!!errors?.nationalCode}
          validationError={'لطفا کد ملی خود را وارد کنید'}
        />
        <MainInput
          {...register('password', { required: true })}
          label="رمزعبور"
          error={!!errors?.password}
          validationError={'لطفا رمز عبور خود را وارد کنید'}
        />
        <MainButton type={ButtonType.textStruckDark} text="ورود" />
      </form>
      <MainButton
        type={ButtonType.textIcon}
        onClick={() => {
          console.log('hereeeeeeeee')
        }}
        customClassName=""
        iconName="arrow-left"
        text=" ورود با رمز یکبار مصرف"
      />
    </div>
  )
}
