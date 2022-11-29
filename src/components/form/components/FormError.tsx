import React, { FC } from 'react'
import styles from './styles.module.scss'

const FormError: FC<any> = ({ className, error }) => {
  {
    /* TODO [adib] edit showing error message without transparent color */
  }
  return (
    <p className={[styles['form-error'], styles[className]].join(' ')}>
      {error}
    </p>
  )
}

export default FormError
