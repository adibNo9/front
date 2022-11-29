import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'

import { FormConfig, FormProps } from '@components/form/formTypes'
import FormGroup from '@components/form/components/FormGroup'
import { SelectField } from '@components/form/components/SelectField'
import { TextAreaField } from '@components/form/components/TextAreaField'
import FormSection from '@components/form/components/FormSection'
import { TextField } from './TextField'
import MainButton, { ButtonKind } from '@components/ui/MainButton'
import MainOtp from '@components/form/components/MainOtp'

const getFormElement = (type: string) => {
  let Component: any = null

  switch (type) {
    case 'text':
    case 'password':
    case 'checkbox':
      Component = TextField
      break
    case 'otp':
      Component = MainOtp
      break
    case 'textarea':
      Component = TextAreaField
      break
    case 'select':
      Component = SelectField
      break
    default:
      break
  }
  return Component
}

const Form: React.FC<FormProps> = ({
  schema,
  rootClass,
  buttonClass,
  parentClass,
  onSubmit,
  formOptions,
  primaryButton,
  secondaryButton,
  onSecondaryButtonClick,
}) => {
  const form = useForm(formOptions)
  const formElements = getFormElements(schema)

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={rootClass || 'w-full'}
      >
        {formElements}

        <MainButton
          customClassName={buttonClass}
          type="submit"
          kind={ButtonKind.textStruckDark}
          text={primaryButton}
        />

        {secondaryButton && (
          <button type="button" onClick={onSecondaryButtonClick}>
            {secondaryButton}
          </button>
        )}
      </form>
    </FormProvider>
  )
}
// eslint-disable-next-line
function getFormGroup(config: FormConfig): JSX.Element {
  return (
    <FormGroup config={config} key={config.id}>
      {config.elements && getFormElements(config.elements)}
    </FormGroup>
  )
}
// eslint-disable-next-line
function getFormSection(config: FormConfig): JSX.Element {
  return (
    <FormSection config={config} key={config.id}>
      {config.elements && getFormElements(config.elements)}
    </FormSection>
  )
}

function getFormElements(configs: FormConfig[]) {
  return configs.map(config => {
    if (config.type === 'group') {
      return getFormGroup(config)
    }
    if (config.type === 'section') {
      return getFormSection(config)
    }
    const Element: any = getFormElement(config.type)
    return <Element field={config} key={config.id} />
  })
}

export default Form
