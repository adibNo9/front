import React, { FC } from 'react'
import styles from './styles.module.scss'
import { useLogic } from './useLogic'
import classNames from 'classnames'
import MainIcon from '../MainIcon'

interface IMainCheckbox {
    label?: string,
    id?: string,
    disabled?: boolean,
    defaultValue?: boolean
    onChange?: () => void
    customClassName?: string
}

const MainCheckbox: FC<IMainCheckbox> = ({
  label,
  id,
  disabled,
  onChange,
  defaultValue = false,
  customClassName,
  ...otherProps
}) => {
  const { isChecked, handleChange, labelText, disabledCLassName } = useLogic({ defaultValue, disabled, onChange, label });

  const mainCheckboxContainerClassName = [
    styles['main-checkbox-container'],
    styles[disabledCLassName],
    customClassName,
  ].join(' ')

  return (
        <div className={styles['main-checkbox']}>
            <div
                className={mainCheckboxContainerClassName}
                onClick={handleChange}
                id={id}
                {...otherProps}
            >
                {isChecked &&
                    <MainIcon iconName="check" customClassName={styles['check-icon']} />
                }
            </div>
            <label onClick={handleChange}>{labelText}</label>

        </div >
  )
}

export default MainCheckbox