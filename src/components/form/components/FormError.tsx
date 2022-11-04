import React, { FC } from 'react'

const FormError: FC<any> = ({ className, error }) => {
  return <p className={className ?? 'text-xs text-global-red pr-3 '}>{error}</p>
}

export default FormError
