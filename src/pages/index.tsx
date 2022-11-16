import React from 'react'
import MainButton, { ButtonType } from '@components/ui/MainButton'

const index = () => {
  return (
    <div>
      <MainButton
        customClassName="test"
        onClick={() => {
          console.log('You click this button')
        }}
        type={ButtonType.text}
        disabled={false}
        text="test"
      />
    </div>
  )
}

export default index
