import React from 'react'
import { useTranslation } from 'next-i18next'
import classNames from 'classnames'
import styles from './styles.module.scss'

/**
 * Types of button type
 * We define wrapper class name with type
 * Note: type of buttons with text must contain text and with icon must contain icon
 * const hasIcon = type?.includes('icon')
 * const hasText = type?.includes('text')
 */
export enum ButtonType {
  text = 'text-button',
  textIcon = 'text-icon-button',
  textStruckDark = 'text-struck-dark-button',
  textStruckLight = 'text-struck-light-button',
  smallTextStruckDark = 'small-text-struck-dark-button',
  smallTextStruckLight = 'small-text-struck-light-button',
  icon = 'icon-button',
}

export interface IMainButton {
  type: ButtonType
  iconName?: string
  text?: string
  customClassName?: string
  disabled?: boolean
  onClick: () => void
}

const MainButton: React.FC<IMainButton> = ({
  onClick,
  type,
  iconName,
  text,
  disabled,
  customClassName,
}) => {
  /******************************* CONSTANTS *********************************************/
  const { t } = useTranslation()
  const hasIcon = type?.includes('icon')
  const hasText = type?.includes('text')
  const wrapperClassName = classNames({
    'disabled-button-struck': disabled && type.includes('struck-dark'),
    'disabled-button-border': disabled && type.includes('struck-light'),
    'disabled-button-text':
      disabled && [ButtonType.text, ButtonType.textIcon].includes(type),
  })

  /******************************* ELEMENTS *********************************************/
  return (
    <div
      className={[
        styles[`custom-button-wrapper`],
        styles[type],
        styles[wrapperClassName],
        styles[classNames(customClassName)],
      ].join(' ')}
    >
      <button
        disabled={disabled}
        onClick={onClick}
        className={styles['custom-button']}
      >
        {iconName && hasIcon && (
          /**TODO[Nasrin] use Icon component instead of svg */
          <svg
            className="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
        )}
        {text && hasText && <span>{t(text)}</span>}
      </button>
    </div>
  )
}

export default MainButton
