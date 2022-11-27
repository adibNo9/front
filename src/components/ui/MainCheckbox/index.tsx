import React, {SyntheticEvent, FC } from 'react'
import styles from './styles.module.scss'
import { useLogic } from './useLogic'
import MainIcon from '../MainIcon'

interface IMainCheckbox {
    label?: string,
    name?: string,
    id?: string,
    disabled?: boolean,
    defaultValue?: boolean
    onChange?: (e: SyntheticEvent, isChecked: boolean) => void
    customClassName?: string
}

const MainCheckbox: FC<IMainCheckbox> = ({
  label,
  id,
  disabled,
  onChange,
  defaultValue = false,
  name,
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
                <input type='checkbox' name={name} />
            </div>
            <label onClick={handleChange}>{labelText}</label>

        </div >
  )
}

export default MainCheckbox