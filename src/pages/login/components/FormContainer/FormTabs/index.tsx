import * as React from 'react'
import { useLogic } from './useLogic'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import { ILoginStep } from 'src/pages/login'
import ForgetPassWordForm from './ForgetPassWordForm'
import OTPForm from './OTPForm'
import dynamic from 'next/dynamic'

const MainTab = dynamic(() => import('@components/ui/MainTab'), {
  ssr: false,
})
const FormTabs: React.FC = () => {
  const { value, register, login, handleChange, getTabProps, loginStep } =
    useLogic()
  const tabs = [
    {
      label: "ورود",
      Component: (
         <>{loginStep === ILoginStep.login && <LoginForm />}
        {loginStep === ILoginStep.changePassword && <ForgetPassWordForm />}
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
