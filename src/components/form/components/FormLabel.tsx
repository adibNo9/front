import React, { FC } from 'react'
import styles from './styles.module.scss'

const FormLabel: FC<any> = ({ label, name }) => {
  return (
    <label key={name} htmlFor={name} className={styles['form-label']}>
      {label}
    </label>
  )
}

export default FormLabel
