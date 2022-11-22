import React from 'react'
import Actions from './Actions'
import StudentProfile from './StudentProfile'
import MainButton, { ButtonType } from '@components/ui/MainButton'
import styles from './styles.module.scss'

const MainHeader: React.FC = () => {
  return (
    <>
      <div className={styles['header-container']}>
        <div className={styles['header-item-actions']}>
          <Actions />
        </div>
        <div className={styles['header-item-profile']}>
          <MainButton
            type={ButtonType.smallTextStruckDark}
            onClick={() => console.log('خرید اشتراک')}
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
