import React, { useState } from 'react'
import Image from 'next/image'
import FormContainer from '../login/components/FormContainer/FormTabs'
import styles from './FormLayout.module.scss'
import login from '@assets/images/login.png'
import changePassword from '@assets/images/changePassword.png'
import otp from '@assets/images/otp.png'
import signup from '@assets/images/signup.png'
import { useRouter } from 'next/router'
import { getDirection } from '@utils/get-direction'

export enum ILoginStep {
  login = 'login',
  signup = 'signup',
  changePassword = 'changePassword',
  forgetPassWord = 'forgetPassWord',
  otp = 'otp',
}

const imageComponent = {
  login: login,
  signup: signup,
  forgetPassWord: changePassword,
  changePassword: changePassword,
  otp: otp,
}

export const LoginStepContext = React.createContext(ILoginStep.login)

const FormLayout: React.FC = () => {
  const [loginStep, setLoginStep] = useState<ILoginStep>(ILoginStep.login)
  const isImageBottomAlignment =
    loginStep === ILoginStep.changePassword ||
    loginStep === ILoginStep.forgetPassWord
  const { locale } = useRouter()
  const dir = getDirection(locale)
  return (
    <LoginStepContext.Provider value={{ loginStep, setLoginStep }}>
      <section dir={dir} className={styles['form-layout-container']}>
        <main>
          <FormContainer />
        </main>
        <div
          className={[
            styles['form-image-wrapper'],
            isImageBottomAlignment ? styles['image-bottom-alignment'] : '',
          ].join(' ')}
        >
          <Image src={imageComponent[loginStep]} />
        </div>
      </section>
    </LoginStepContext.Provider>
  )
}

export default FormLayout
