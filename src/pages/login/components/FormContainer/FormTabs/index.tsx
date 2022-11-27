import * as React from 'react'
import styles from './FormTabs.module.scss'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import TabPanel from './components/TabPanel'
import { useLogic } from './useLogic'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import { ILoginStep } from 'src/pages/login'
import ForgetPassWordForm from './ForgetPassWordForm'
import OTPForm from './OTPForm'

const FormTabs: React.FC = () => {
  const { value, register, login, handleChange, getTabProps, loginStep } =
    useLogic()

  return (
    <Box className={styles['form-tabs-wrapper']}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="fullWidth"
        >
          <Tab
            label={login}
            aria-selected={true}
            {...getTabProps(0)}
            style={{ marginLeft: '.75em' }}
          />
          <Tab label={register} {...getTabProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {loginStep === ILoginStep.login && <LoginForm />}
        {loginStep === ILoginStep.forgetPassWord && <ForgetPassWordForm />}
        {loginStep === ILoginStep.otp && <OTPForm />}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <RegisterForm />
      </TabPanel>
    </Box>
  )
}

export default FormTabs
