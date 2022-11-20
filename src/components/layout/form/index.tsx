import React from 'react'
import Image from 'next/image'
import FormContainer from './components/FormContainer/FormTabs';
import styles from './FormLayout.module.scss';

export interface IPic {
    src: string,
    width?: number,
    height?: number,
    className?: string,
}

export interface IFormLayout {
    children?: React.ReactNode,
    imageProps: IPic,
}

const FormLayout: React.FC<IFormLayout> = ({ imageProps }) => {
  return (
        <section dir='ltr' className={styles['form-layout-container']}>
            <div className={styles['form-image-wrapper']}>
                <Image
                    {...imageProps}

                  />
            </div>
            <main>
                <FormContainer />
            </main>
        </section>
  )
}

export default FormLayout
