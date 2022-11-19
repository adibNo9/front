import { InputLabel, Typography } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import classNames from 'classnames'
import OutlinedInput from '@mui/material/OutlinedInput'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { FC } from 'react'
import { generateMenu, ArrowIcon, translateItems } from './helper'
import { useTranslation } from 'next-i18next'
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
  const [translate] = useTranslation()
  const itemsTexts = translateItems(items, translate)
  const menu = generateMenu(itemsTexts)

  const renderValue = (selected: string) => {
    const placeHolder: string = translate('انتخاب کنید')

    if (!selected) {
      return <span>{placeHolder}</span>
    }

    return selected
  }

  const titleText: string = translate(title)

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
          {
            menu
          }
        </Select>
      </FormControl>
    </div>
  )
}

export default MainSelectInput
