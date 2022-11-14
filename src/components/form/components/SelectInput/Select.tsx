import { FC, useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { DownArrow } from 'src/assets/icons/downArrow';

interface FormSelectInputProps {
  items: string[],
}

const FormSelectInput: FC<FormSelectInputProps> = ({ items }) => {
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
        <Select
          IconComponent={(props) => <DownArrow {...props} />}
          displayEmpty
          value={selectedItem}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return items[0];
            }

            return selected.join(', ');
          }}
          inputProps={{ 'aria-label': 'Without label' }}
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