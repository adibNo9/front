import MainInput from '@components/form/components/MainTextField'
import MainButton, { ButtonType } from '@components/ui/MainButton'
import { useForm } from 'react-hook-form'
import styles from './FormTabs.module.scss'

type FormData = {
  name: string
  family: string
  nationalCode: number
  phoneNumber: number
  email: string
}

export default function RegisterForm() {
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
          {...register('name', { required: true })}
          label="نام"
          error={!!errors?.nationalCode}
          validationError={'لطفا نام خود را وارد کنید'}
          pattern="[A-Za-z]"
        />
        <MainInput
          {...register('family', { required: true })}
          label="نام خانوادگی"
          error={!!errors?.nationalCode}
          validationError={'لطفا نام خانوادگی خود را وارد کنید'}
          pattern="[A-Za-z]"
        />
        <MainInput
          {...register('nationalCode', { required: true })}
          label="کدملی"
          error={!!errors?.nationalCode}
          validationError={'لطفا کد ملی خود را وارد کنید'}
          pattern="[0-9]"
        />
        <MainInput
          {...register('phoneNumber')}
          label="شماره تلفن همراه"
          pattern="[0-9]"
        />
        <MainInput {...register('email')} label="ایمیل" pattern="[0-9]" />
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
