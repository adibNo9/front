import React from 'react'
import { useTranslation } from 'next-i18next'
import classNames from 'classnames'
import styles from './styles.module.scss'
import MainIcon from '../MainIcon'

/**
 * Types of button type
 * We define wrapper class name with type
 * Note: type of buttons with text must contain text and with icon must contain icon
 * const hasIcon = type?.includes('icon')
 * const hasText = type?.includes('text')
 */
export enum ButtonKind {
  text = 'text-button',
  textIcon = 'text-icon-button',
  textStruckDark = 'text-struck-dark-button',
  textStruckLight = 'text-struck-light-button',
  smallTextStruckDark = 'small-text-struck-dark-button',
  smallTextStruckLight = 'small-text-struck-light-button',
  icon = 'icon-button',
}

export interface IMainButton {
  kind: ButtonKind
  type?: 'button' | 'submit' | 'reset' | undefined
  iconName?: string
  text?: string
  customClassName?: string
  iconCustomClassName?: string
  disabled?: boolean
  onClick?: (e: React.MouseEvent | undefined) => void
}

const MainButton: React.FC<IMainButton> = ({
  onClick,
  type,
  kind,
  iconName,
  text,
  disabled,
  customClassName,
  iconCustomClassName,
}) => {
  /******************************* CONSTANTS *********************************************/
  const { t } = useTranslation()
  const hasIcon = kind?.includes('icon')
  const hasText = kind?.includes('text')
  const disabledCLassName = classNames({
    'disabled-button': disabled,
  })
  /******************************* ELEMENTS *********************************************/
  return (
    <div
      className={[
        styles[`main-button-wrapper`],
        styles[kind],
        styles[disabledCLassName],
        customClassName,
      ].join(' ')}
    >
      <button
        disabled={disabled}
        onClick={onClick}
        className={styles['main-button']}
        type='submit'
      >
        {text && hasText && (
          <span className={styles['main-button-text']}>{t(text)}</span>
        )}
        {iconName && hasIcon && (
          <MainIcon iconName={iconName} customClassName={iconCustomClassName} />
        )}
      </button>
    </div>
  )
}

export default MainButton
