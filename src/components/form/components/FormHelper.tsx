import React, { FC } from 'react'

const FormHelper: FC<any> = ({ helper }) => {
  return (
    <i className="flex items-center font-normal text-right text-stone-600 border-none text-xs py-2 h-10">

      <span className="mr-1 text-[10px] text-gray-400 not-italic">
        {helper}
      </span>
    </i>
  )
}

export default FormHelper
