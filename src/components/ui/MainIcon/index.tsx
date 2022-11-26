import React from 'react'

import styles from './styles.module.scss'

export interface IMainIcon {
  iconName: string
  customClassName?: string
}

const MainIcon: React.FC<IMainIcon> = ({ iconName, customClassName }) => {
  if (!iconName) return null
  return (
    <div className={styles['main-icon-wrapper']}>
      <i
        className={[
          styles['main-icon'],
          customClassName,
          `icon-${iconName}`,
        ].join(' ')}
      />
    </div>
  )
}

export default MainIcon
