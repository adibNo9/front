import MainInput from '@components/form/components/MainInput'
import MainButton, { ButtonType } from '@components/ui/MainButton'
import MainText from '@components/ui/MainText'
import { useForm } from 'react-hook-form'
import styles from './FormTabs.module.scss'

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
        />
      </form>
      <MainButton
        customClassName={styles['login-button']}
        type={ButtonType.textStruckDark}
        text="ارسال کد به تلفن همراه"
      />
      <MainButton
        type={ButtonType.textIcon}
        onClick={() => {}}
        customClassName={styles['login-arrow-button']}
        iconName="arrow-left"
        text="ارسال کد به ایمیل"
      />
    </div>
  )
}
