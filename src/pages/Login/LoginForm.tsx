import MainInput from '@components/form/components/MainTextField'
import MainButton, { ButtonType } from '@components/ui/MainButton'
import { useForm } from 'react-hook-form'

type FormData = {
  firstName: string
  lastName: string
}

export default function LoginForm() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()
  const onSubmit = handleSubmit(data => console.log(data))
  // firstName and lastName will have correct type

  return (
    <form onSubmit={onSubmit}>
      <MainInput {...register('firstName')} label="کدملی" />
      <MainInput {...register('lastName')} label="رمزعبور" />
      <MainButton
        type={ButtonType.textStruckDark}
        onClick={() => {
          onSubmit()
        }}
        text="ورود"
      />
      <MainButton
        type={ButtonType.textIcon}
        onClick={() => {
          //TODO password
        }}
        iconName="arrow-left"
        text="یکبار مصرف ورود با رمز"
      />
    </form>
  )
}
