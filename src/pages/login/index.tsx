import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import FormContainer from './components/FormContainer/FormTabs'
import styles from './FormLayout.module.scss'
import login from '@assets/images/login.png'
import changePassword from '@assets/images/changePassword.png'
import otp from '@assets/images/otp.png'
import signup from '@assets/images/signup.png'

export enum ButtonType {
  login = 'login',
  signup = 'signup',
  forgetPassWord = 'forgetPassWord',
  changePassword = 'changePassword',
  otp = 'otp',
}

const imageComponent = {
  login: login,
  signup: signup,
  changePassword: changePassword,
  otp: otp,
}
interface ILoginState {
  step: ButtonType
}
const LoginStepContext = React.createContext({ step: ButtonType.login })

export interface IFormLayout {
  children?: React.ReactNode
}

const FormLayout: React.FC<IFormLayout> = () => {
  const [loginState, setLoginState] = useState<ILoginState>({
    step: ButtonType.login,
  })

  return (
    <LoginStepContext.Provider value={{ loginState, setLoginState }}>
      <section className={styles['form-layout-container']}>
        <main>
          <FormContainer />
        </main>
        <div className={styles['form-image-wrapper']}>
          <Image src={imageComponent?.[loginState?.step]} />
        </div>
      </section>
    </LoginStepContext.Provider>
  )
}

export default FormLayout
