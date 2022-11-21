import { LargeCheckIcon } from '@assets/icons/checkLg'
import { SmallCheckIcon } from '@assets/icons/checkSm'
import { LargeUncheckIcon } from '@assets/icons/uncheckLg'
import { SmallUncheckIcon } from '@assets/icons/uncheckSm'

import React, {  FC } from 'react'
import styles from './styles.module.scss'
import { useLogic } from './useLogic'

enum checkboxSize {
    sm = 'sm',
    lg = 'lg'
};

interface IMainCheckbox {
    label?: string,
    size: string,
    id?: string,
    disabled?: boolean,
    defaultValue?: boolean
    onChange?: () => void
}

const MainCheckbox: FC<IMainCheckbox> = ({
    label,
    size,
    id,
    disabled,
    onChange,
    defaultValue = false,
    ...otherProps
}) => {
    
    const {isChecked , setIsChecked, handleChange, labelText} = useLogic(defaultValue, onChange, label);
   
    const CheckedIcon = size === checkboxSize.sm ? <SmallCheckIcon /> : <LargeCheckIcon />;
    const UncheckIcon = size === checkboxSize.sm ? <SmallUncheckIcon /> : <LargeUncheckIcon />;
    

    return (
        <div className={styles['main-checkbox']}>
            <div
                className='w-32 h-32'
                onClick={handleChange}
                id={id}
                disabled={disabled}
                {...otherProps}
            >
                {isChecked ?
                    CheckedIcon
                    :
                    UncheckIcon
                }
                <label>{labelText}</label>
            </div>
            
        </div >
    )
}

export default MainCheckbox