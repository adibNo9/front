import React from 'react'

import styles from './styles.module.scss'
import MainButton, { ButtonKind } from '@components/ui/MainButton'

const Actions: React.FC<{
  onAngleRight: () => void
  onEnvelopeClick: () => void
  onLogoClick: () => void
  onSearchClick: () => void
}> = ({ onAngleRight, onEnvelopeClick, onLogoClick, onSearchClick }) => {
  return (
    <div className={styles['header-actions']}>
      <MainButton
        kind={ButtonKind.icon}
        onClick={onAngleRight}
        iconName="angle-right-1"
        iconCustomClassName={styles['icon']}
        customClassName={styles['icon-button']}
      />
      <MainButton
        kind={ButtonKind.text}
        text={'داناجو'}
        onClick={onLogoClick}
        customClassName={styles['danaju-logo']}
      />
      <MainButton
        kind={ButtonKind.icon}
        onClick={onEnvelopeClick}
        iconName="envelope"
        iconCustomClassName={styles['icon']}
        customClassName={styles['icon-button']}
      />
      <MainButton
        kind={ButtonKind.icon}
        onClick={onSearchClick}
        iconName="magnifying-glass"
        iconCustomClassName={styles['icon']}
        customClassName={styles['icon-button']}
      />
    </div>
  )
}

export default Actions
