import cn from 'classnames'
import React, { OptionHTMLAttributes, SelectHTMLAttributes } from 'react'
import { useTranslation } from 'next-i18next'

export interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string
  selectClassName?: string
  labelKey?: string
  placeholderKey?: string
  name: string
  errorKey?: string
  type?: string
  shadow?: boolean
  variant?: 'normal' | 'solid' | 'outline'
  options: OptionHTMLAttributes[]
}

const Select = React.forwardRef<HTMLSelectElement, Props>(
  (
    {
      className = 'flex',
      label,
      name,
      errorKey,
      placeholderKey,
      variant = 'normal',
      shadow = false,
      type = 'text',
      selectClassName,
      options,
      ...rest
    },
    ref,
  ) => {
    const rootClassName = cn(selectClassName)
    const { t } = useTranslation()
    return (
      <div className={className}>
        {label && (
          <label className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">
            {label}
          </label>
        )}

        <select
          id={name}
          name={name}
          ref={ref}
          // @ts-ignore
          className={rootClassName}
          {...rest}
        >
          {options.map((item: OptionHTMLAttributes, index: Number) => (
            <options key={index + '-' + item.label}>{item.label}</options>
          ))}
        </select>

        {errorKey && (
          <p className="my-2 text-xs text-global-red">{t(errorKey)}</p>
        )}
      </div>
    )
  },
)

export default Select
