import { UseFormOptions } from 'react-hook-form'
import { RegisterOptions } from 'react-hook-form/dist/types/validator'
import React from "react";

export interface FormConfig {
  id: string
  type: any
  className?: string
  name?: string
  elements?: FormConfig[]
}

export interface Options {
  value: any
  label: string
  disabled?: boolean
}

export interface FormProps {
  rootClass?: string
  buttonClass?: string
  title?: string
  schema: FormConfig[]
  parentClass?: string
  onSubmit: (values?: any) => void
  overwriteDefaultStyles?: boolean
  formOptions?: UseFormOptions
  primaryButton: string
  secondaryButton?: string
  onSecondaryButtonClick?: () => any
}
// eslint-disable-next-line
export interface FieldProps<T extends Field> {
  id?: string
  name: string
  field: T
  value?: any
}

interface FieldElement {
  type:
    | 'text'
    | 'textArea'
    | 'number'
    | 'switch'
    | 'array'
    | 'object'
    | 'checkbox'
    | 'select'
    | 'custom'

  shouldDisplay?: (values?: any) => boolean
}

interface FormController {
  name: string
  label?: string
  className?: string
  placeholder?: string
  helper?: string
  isRequired?: boolean
  validations?: RegisterOptions
  value: any
}

export interface TextFieldType extends FieldElement, FormController {
  type: any
  htmlInputType?: string,
  extraComponent?: React.ReactElement
}
export type Field = TextFieldType
export interface TextAreaFieldType extends FieldElement, FormController {
  type: any
  htmlInputType?: string
  rows: number
}
export interface SelectFieldType extends FieldElement, FormController {
  options?: any
  onChange?: any
}
export interface DateFieldType extends FieldElement, FormController {
  disabledYearField?: any
}
export interface UploadFieldType extends FieldElement, FormController {
  type: any
  list: any
  maxFileCount?: number
  uploadUrl?: string
}
export type Schema = Record<string, Field>
