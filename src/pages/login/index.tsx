import React, { useState } from 'react'
import Image from 'next/image'
import FormContainer from './components/FormContainer/FormTabs'
import styles from './FormLayout.module.scss'
import login from '@assets/images/login.png'
import changePassword from '@assets/images/changePassword.png'
import otp from '@assets/images/otp.png'
import signup from '@assets/images/signup.png'

export enum ILoginStep {
  login = 'login',
  signup = 'signup',
  changePassword = 'changePassword',
  otp = 'otp',
}

const imageComponent = {
  login: login,
  signup: signup,
  changePassword: changePassword,
  otp: otp,
}

export const LoginStepContext = React.createContext(ILoginStep.login)

const FormLayout: React.FC = () => {
  const [loginStep, setLoginStep] = useState<ILoginStep>(ILoginStep.login)

  return (
    <LoginStepContext.Provider value={{ loginStep, setLoginStep }}>
      <section className={styles['form-layout-container']}>
        <main>
          <FormContainer />
        </main>
        <div className={styles['form-image-wrapper']}>
          <Image src={imageComponent[loginStep]} />
        </div>
      </section>
    </LoginStepContext.Provider>
  )
}

export default FormLayout
