import React from 'react'

import styles from './styles.module.scss'
import MainButton, { ButtonType } from '@components/ui/MainButton'

const Actions: React.FC<{
  onAngleRight: () => void
  onEnvelopeClick: () => void
  onLogoClick: () => void
  onSearchClick: () => void
}> = ({ onAngleRight, onEnvelopeClick, onLogoClick, onSearchClick }) => {
  return (
    <div className={styles['header-actions']}>
      <MainButton
        type={ButtonType.icon}
        onClick={onAngleRight}
        iconName="angle-right-1"
        iconCustomClassName={styles['icon']}
        customClassName={styles['icon-button']}
      />
      <MainButton
        type={ButtonType.text}
        text={'داناجو'}
        onClick={onLogoClick}
        customClassName={styles['danaju-logo']}
      />
      <MainButton
        type={ButtonType.icon}
        onClick={onEnvelopeClick}
        iconName="envelope"
        iconCustomClassName={styles['icon']}
        customClassName={styles['icon-button']}
      />
      <MainButton
        type={ButtonType.icon}
        onClick={onSearchClick}
        iconName="magnifying-glass"
        iconCustomClassName={styles['icon']}
        customClassName={styles['icon-button']}
      />
    </div>
  )
}

export default Actions
