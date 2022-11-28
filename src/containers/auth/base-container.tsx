import * as React from 'react'
import { useLogic } from './hooks/useLogic'
import LoginForm from './login-container'
import RegisterForm from './register-container'
import { ILoginStep } from 'src/pages/auth'
import ForgetPassWordForm from './forgetpassword-container'
import OTPForm from './OTP-container'
import dynamic from 'next/dynamic'
import { Itabs } from '@components/ui/MainTab'

const MainTab = dynamic(() => import('@components/ui/MainTab'), {
  ssr: false,
})
const FormTabs: React.FC = () => {
  const { value, register, login, handleChange, getTabProps, loginStep } =
    useLogic()
  const tabs:Itabs[] = [
    {
      label: "ورود",
      Component: (
         <>{loginStep === ILoginStep.login && <LoginForm />}
        {loginStep === ILoginStep.forgetPassWord && <ForgetPassWordForm />}
        {loginStep === ILoginStep.otp && <OTPForm />}</>
      ),

    },
    {
      label: "ثبت نام",
      Component: <RegisterForm />,
   
    }
  ];
  return (
    <MainTab  variant='fullWidth' value={value} onChange={handleChange} tabs={tabs} />
  )
}

export default FormTabs
