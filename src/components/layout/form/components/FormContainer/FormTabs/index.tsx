import * as React from 'react';
import styles from './FormTabs.module.scss';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from './components/TabPanel';
import { useLogic } from './useLogic';

const FormTabs: React.FC = () => {
  const { value, register, login, handleChange, getTabProps} = useLogic()

  return (
    <Box className={styles['form-tabs-wrapper']}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label={register} {...getTabProps(0)} />
          <Tab label={login} {...getTabProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Register form component
      </TabPanel>
      <TabPanel value={value} index={1}>
        Login form component
      </TabPanel>
    </Box>
  );
}

export default FormTabs