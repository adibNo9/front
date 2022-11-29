import React from 'react'
import { FormControlProps } from '../formTypes'
import styles from './styles.module.scss'

const FormControl: React.FC<FormControlProps> = (child) => {
  return <div className={[styles['form-control'], styles[child.className ?? '']].join(" ")}>{child.children}</div>
}

export default FormControl
