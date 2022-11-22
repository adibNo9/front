import React from 'react'

import styles from './styles.module.scss'
import MainButton, { ButtonType } from '@components/ui/MainButton'

const Actions = () => {
  return (
    <div className={styles['header-actions']}>
      <MainButton
        type={ButtonType.icon}
        onClick={() => console.log('icon clicked')}
        iconName="angle-right-1"
        iconCustomClassName={styles['icon']}
        customClassName={styles['icon-button']}
      />
      <MainButton
        type={ButtonType.text}
        text={'داناجو'}
        onClick={() => console.log('danajo logo')}
        customClassName={styles['danaju-logo']}
      />
      <MainButton
        type={ButtonType.icon}
        onClick={() => console.log('icon clicked')}
        iconName="envelope"
        iconCustomClassName={styles['icon']}
        customClassName={styles['icon-button']}
      />
      <MainButton
        type={ButtonType.icon}
        onClick={() => console.log('icon clicked')}
        iconName="magnifying-glass"
        iconCustomClassName={styles['icon']}
        customClassName={styles['icon-button']}
      />
    </div>
  )
}

export default Actions
