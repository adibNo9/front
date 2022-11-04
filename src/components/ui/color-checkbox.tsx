import React from 'react'
import { useTranslation } from 'next-i18next'
interface ColorCheckBoxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  labelKey?: string
  label?: string | any
  checked: boolean
  toggleCheckbox: any
  id: string
}
export const ColorCheckBox = React.forwardRef<
  HTMLInputElement,
  ColorCheckBoxProps
>(({ id, checked, toggleCheckbox, labelKey, label, ...rest }, ref) => {
  const { t } = useTranslation()
  return (
    <label className="relative file:group flex items-center text-heading text-sm cursor-pointer ml-2">
      <input
        id={id}
        type="checkbox"
        className="ml-3 absolute top-0.5 border-transparent bg-transparent rounded-full form-checkbox w-7 h-7   cursor-pointer
         transition duration-500 ease-in-out focus:ring-offset-0  focus:outline-none focus:ring-0
        focus-visible:outline-none   "
        ref={ref}
        onChange={() => toggleCheckbox(rest.value, id)}
        checked={checked}
        {...rest}
      />

      <span className="w-7 h-7">{labelKey ? t(labelKey) : label}</span>
    </label>
  )
})
