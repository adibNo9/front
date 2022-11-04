import React from 'react'

const FormGroup: React.FC<any> = (props: any) => {
  return (
    <div className={props.config.className ?? ' '}>
      {props.children}
    </div>
  )
}

export default FormGroup
