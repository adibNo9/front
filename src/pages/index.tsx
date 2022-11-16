import MuiTextField from '@components/form/components/MuiTextField'
import FormSelectInput from '@components/form/components/SelectInput/FormSelectInput'
import { Box } from '@mui/material'
import React, { useState } from 'react'

import { SelectChangeEvent } from '@mui/material/Select';

const names: string[] = [
  'ali',
  'mohamad',
  'hassan',
  'hossein',
]

const index = () => {
  const [selected, setSelected] = useState<string>('');

  const handleChange = (event: SelectChangeEvent<string>): void => {
    const {
      target: { value },
    } = event;
    setSelected(value);
  };

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto',
        border: '1px solid #666',
        marginTop: 20,
        marginBottom: 20,
        flexDirection: 'column',
      }}
    >
      <FormSelectInput
        stateValue={selected}
        onChange={handleChange}
        title='نام'
        items={names}
      />
      <MuiTextField
        label="کد ملی"
        fullWidth
        id="nationalCode"
        type="text"
        helperText="کد ملی خود را وارد کنید"
      />
      <MuiTextField
        label="کد ملی"
        fullWidth
        id="nationalCode"
        type="text"
        helperText="کد ملی خود را وارد کنید"
      />
      <MuiTextField
        label="کد ملی"
        fullWidth
        id="nationalCode"
        type="text"
        helperText="کد ملی خود را وارد کنید"
      />
    </Box>
  )
}

export default index
