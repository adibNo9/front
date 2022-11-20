import React from 'react'
import Image, { StaticImageData } from 'next/image'
import FormContainer from './components/FormContainer/FormTabs';
import styles from './FormLayout.module.scss';
import login from '@assets/images/login.png'
import changePassword from '@assets/images/changePassword.png'
import otp from '@assets/images/otp.png'
import signup from '@assets/images/signup.png'

export interface IFormLayout {
    children?: React.ReactNode,
}

const FormLayout: React.FC<IFormLayout> = () => {
  // to do: add context and read step from it in form levels.
  const stemImages: StaticImageData[] = [
    login,
    changePassword,
    otp,
    signup
  ];

  const step: number = 0;

  return (
        <section dir='ltr' className={styles['form-layout-container']}>
            <div className={styles['form-image-wrapper']}>
                <Image
                    src={stemImages[step]}
                  />
            </div>
            <main>
                <FormContainer />
            </main>
        </section>
  )
}

export default FormLayout
