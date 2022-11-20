import { FC } from 'react'
import { InputLabel, MenuItem, Typography } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import classNames from 'classnames'
import OutlinedInput from '@mui/material/OutlinedInput'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { DownArrow } from '@assets/icons/downArrow'
import { useLogic } from './hooks/useLogis'
import styles from './styles.module.scss'

interface IMainSelectInput {
  items: string[],
  title: string,
  onChange?: (event: SelectChangeEvent<string>) => void,
  stateValue: string
}

const MainSelectInput: FC<IMainSelectInput> = ({
  items,
  title,
  onChange,
  stateValue,
  ...otherProps
}) => {
  const { itemsTexts, placeHolder, titleText } = useLogic(items, title);

  const renderValue = (selected: string) => {
    if (!selected) {
      return <span>{placeHolder}</span>
    }
    return selected
  }

  const ArrowIcon = (props) => <DownArrow {...props} />

  return (
    <div>
      <FormControl
        className={classNames(styles['main-select-input-wrapper'])}
      >
        <InputLabel shrink htmlFor='select-input'>
          <Typography variant="h3">{titleText}</Typography>
        </InputLabel>
        <Select
          IconComponent={ArrowIcon}
          id='select-input'
          displayEmpty
          value={stateValue}
          onChange={onChange}
          input={<OutlinedInput />}
          renderValue={renderValue}
          inputProps={{ 'aria-label': 'Without label' }}
          {...otherProps}
          className='menu-wrapper'
        >
          {itemsTexts?.map((item: string) => (
            <MenuItem
              className={styles['menu-item-wrapper']}
              key={item}
              value={item}
            >
              {item}
            </MenuItem>
          ))
          }
        </Select>
      </FormControl>
    </div>
  )
}

export default MainSelectInput
