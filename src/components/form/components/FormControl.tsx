import React from 'react'

const FormControl:React.FC<any> = (child:any) => {
  return (
        <div className="relative w-full">
            {child.children}
        </div>
  )
}

export default FormControl
