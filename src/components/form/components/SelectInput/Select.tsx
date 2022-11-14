import { InputLabel, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FC, useState } from 'react';
import { DownArrow } from 'src/assets/icons/downArrow';

interface FormSelectInputProps {
  items: string[],
  title: string
}

const FormSelectInput: FC<FormSelectInputProps> = ({ items, title, ...otherProps }) => {
  const [selectedItem, setSelectedItem] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof selectedItem>): void => {
    const {
      target: { value },
    } = event;
    setSelectedItem(
      typeof value === 'string' ? value.split(',') : value,
    );
  };


  return (
    <div>
      <FormControl className='selectInputWrapper inputWrapper'>
        {/* <label htmlFor='select-input' >{title}</label> */}
        <InputLabel shrink htmlFor='select-input'>
          <Typography variant="h3">{title}</Typography>
        </InputLabel>
        <Select
          IconComponent={(props) => <DownArrow {...props} />}
          id='select-input'
          displayEmpty
          value={selectedItem}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <span className=''>انتخاب کنید</span>;
            }

            return selected.join(', ');
          }}
          inputProps={{ 'aria-label': 'Without label' }}
          {...otherProps}
        >
          {
            items?.map((item: string) => (
              <MenuItem
                className='menuItemWrapper'
                key={item}
                value={item}
              >
                {item}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default FormSelectInput;