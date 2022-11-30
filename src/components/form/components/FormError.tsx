import React, { FC } from 'react'
import styles from './styles.module.scss'

const FormError: FC<any> = ({ error }) => {
  return (
    <p className={styles['form-error']}>
      {error}
    </p>
  )
}

export default FormError
