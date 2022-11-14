import { InputLabel, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FC, useState } from 'react';
import { generateMenu, ArrowIcon, renderValue } from './helper';

interface FormSelectInputProps {
  items: string[],
  title: string,
  onChange?: (event: SelectChangeEvent<string>) => void,
  defaultValue?: string
}

const FormSelectInput: FC<FormSelectInputProps> = ({
  items,
  title,
  onChange,
  defaultValue,
  ...otherProps
}) => {
  const [selectedItem, setSelectedItem] = useState<string>('');

  const handleChange = (event: SelectChangeEvent<string>): void => {
    const {
      target: { value },
    } = event;

    setSelectedItem(value);
    onChange?.(event);
  };

  const menu = generateMenu(items);

  return (
    <div>
      <FormControl className='selectInputWrapper inputWrapper'>
        <InputLabel shrink htmlFor='select-input'>
          <Typography variant="h3">{title}</Typography>
        </InputLabel>
        <Select
          defaultValue={defaultValue}
          IconComponent={ArrowIcon}
          id='select-input'
          displayEmpty
          value={selectedItem}
          onChange={handleChange}
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