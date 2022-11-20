import React from 'react'
import Image from 'next/image'
import styles from './styles.module.scss'

export interface IMainIcon {
  iconName: string
  width?: number
  height?: number
}

const MainIcon: React.FC<IMainIcon> = ({
  iconName = 'amp-guitar',
  width = 19,
  height = 19,
}) => {
  const iconPath = '/assets/images/icons/' + iconName + '.svg'
  return (
    <div className={styles['main-icon-wrapper']}>
      <Image
        src={iconPath}
        alt="Picture of the author"
        width={width}
        height={height}
        priority
      />
    </div>
  )
}

export default MainIcon
