import React, { FC } from 'react'

const FormLabel: FC<any> = ({ label, name }) => {
  return (
    <label
      key={name}
      htmlFor={name}
      className="text-brand-main bg-white absolute -top-3 right-4 text-md px-1 z-40"
    >
      {label}
    </label>
  )
}

export default FormLabel
