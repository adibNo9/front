import MenuItem from '@mui/material/MenuItem'
import { DownArrow } from 'src/assets/icons/downArrow'

export const generateMenu = (items: string[]) => {
  const list = items?.map((item: string) => (
        <MenuItem
            className='menuItemWrapper'
            key={item}
            value={item}
        >
            {item}
        </MenuItem>
  ))

  return list
}

export const ArrowIcon = (props) => <DownArrow {...props} />

export const renderValue = (selected: string) => {
  if (!selected) {
    return <span>انتخاب کنید</span>;
  }

  return selected
}
