import { SyntheticEvent, useState, useContext } from 'react'
import { useTranslation } from 'next-i18next'
import { ILoginStep, LoginStepContext } from 'src/pages/login'

export const useLogic = () => {
  const { setLoginStep, loginStep } = useContext(LoginStepContext)
  const [value, setValue] = useState(0)
  // Todo[AliMoghimi] translation.
  const [translate] = useTranslation()

  const register: string = translate('ثبت نام')
  const login: string = translate('ورود')

  const handleChange = (event: SyntheticEvent, newValue: number): void => {
    setValue(newValue)
    const newTabStepName = newValue ? ILoginStep.signup : ILoginStep.login
    setLoginStep(newTabStepName)
  }

  const getTabProps = (index: number) => {
    return {
      id: `tab-${index}`,
      'aria-controls': `tabpanel-${index}`,
    }
  }

  return {
    value,
    setValue,
    register,
    login,
    handleChange,
    getTabProps,
    loginStep,
  }
}
