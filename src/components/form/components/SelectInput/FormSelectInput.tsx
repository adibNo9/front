import { InputLabel, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import classNames from 'classnames';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FC } from 'react';
import { generateMenu, ArrowIcon, renderValue } from './helper';
import styles from './styles.module.scss';

interface FormSelectInputProps {
  items: string[],
  title: string,
  onChange?: (event: SelectChangeEvent<string>) => void,
  stateValue: string
}

const FormSelectInput: FC<FormSelectInputProps> = ({
  items,
  title,
  onChange,
  stateValue,
  ...otherProps
}) => {
  const menu = generateMenu(items);

  return (
    <div>
      <FormControl
        className={classNames(styles['select-input-wrapper'], styles['input-wrapper'])}
      >
        <InputLabel shrink htmlFor='select-input'>
          <Typography variant="h3">{title}</Typography>
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
  );
}

export default FormSelectInput;