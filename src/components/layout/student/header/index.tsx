import React from 'react'
import Actions from './Actions'
import StudentProfile from './StudentProfile'
import MainButton, { ButtonKind } from '@components/ui/MainButton'
import styles from './styles.module.scss'

const MainHeader: React.FC = () => {
  const buyButtonHandler = () => {}

  const angleRightHandler = () => {}

  const logoClickHandler = () => {}

  const envelopeClickHandler = () => {}

  const searchClickHandler = () => {}

  return (
    <>
      <div className={styles['header-container']}>
        <div className={styles['header-item-actions']}>
          <Actions
            onAngleRight={angleRightHandler}
            onLogoClick={logoClickHandler}
            onEnvelopeClick={envelopeClickHandler}
            onSearchClick={searchClickHandler}
          />
        </div>
        <div className={styles['header-item-profile']}>
          <MainButton
            kind={ButtonKind.smallTextStruckDark}
            onClick={buyButtonHandler}
            text={'خرید اشتراک'}
            customClassName={styles['buy-button']}
          />
          <StudentProfile />
        </div>
      </div>
    </>
  )
}
export default MainHeader
