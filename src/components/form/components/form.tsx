import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'

import { FormConfig, FormProps } from '@components/form/formTypes'
import FormGroup from '@components/form/components/FormGroup'
import { UploadField } from '@components/form/components/UploadField'
import { SelectField } from '@components/form/components/SelectField'
import { DateField } from '@components/form/components/DateField'
import { TextAreaField } from '@components/form/components/TextAreaField'
import ShopIcon from '@components/icons/shop/shop-icon'
import FormSection from '@components/form/components/FormSection'
import { TextField } from './TextField'

const getFormElement = (type: string) => {
  let Component: any = null

  switch (type) {
    case 'text':
      Component = TextField
      break
    case 'textarea':
      Component = TextAreaField
      break
    case 'upload':
      Component = UploadField
      break
    case 'select':
      Component = SelectField
      break
    case 'date':
      Component = DateField
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
        className={rootClass || 'md:w-2/3 w-full'}
      >
        <div
          className={
            parentClass
              ? 'flex flex-col mb-4'
              : 'flex flex-col md:flex-row mb-4'
          }
        >
          {formElements}
        </div>

        <button
          className={buttonClass || 'w-full flex p-3 shop-btn-submit'}
          type="submit"
        >
          <ShopIcon />
          <span className="pr-3 text-lg font-bold">{primaryButton}</span>
        </button>
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
