import { InputLabel, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FC } from 'react';
import { generateMenu, ArrowIcon, renderValue } from './helper';

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
      <FormControl className='select-input-wrapper input-wrapper'>
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