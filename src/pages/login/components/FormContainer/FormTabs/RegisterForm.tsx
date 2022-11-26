import MainSelectInput from '@components/form/components/MainSelectInput'
import MainInput from '@components/form/components/MainInput'
import MainButton, { ButtonType } from '@components/ui/MainButton'
import MainCheckbox from '@components/ui/MainCheckbox'
import MainText from '@components/ui/MainText'
import { useForm } from 'react-hook-form'
import styles from './FormTabs.module.scss'

type FormData = {
  name: string
  family: string
  nationalCode: number
  phoneNumber: number
  email: string
  level: string
  acceptRules: boolean
}

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()
  const onSubmit = handleSubmit(data => {
    //TODO Register API
  })

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
        <MainSelectInput
          {...register('level')}
          label="رشته و پایه خود را انتخاب کنید"
          items={['ابتدایی']}
        />
        <MainInput
          {...register('phoneNumber')}
          label="شماره تلفن همراه"
          pattern="[0-9]"
        />
        <MainInput {...register('email')} label="ایمیل" pattern="[0-9]" />
        <MainCheckbox
          {...register('acceptRules')}
          label="شرایط استفاده از خدمات  و قوانین حریم خصوصی "
        />
        <MainButton
          type={ButtonType.textStruckDark}
          customClassName={styles['register-button']}
          text="تایید اطلاعات و ارسال کد"
        />
      </form>
      <MainText
        color="black"
        size="12px"
        weight="bold"
        children={`اگر قبلا ثبت نام کردیده اید وارد سامانه شوید`}
      />
    </div>
  )
}
