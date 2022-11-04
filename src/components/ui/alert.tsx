import React from 'react'

interface AlertProps {
  message?: string
}

const Alert: React.FC<AlertProps> = ({ message }) => {
  return (
    <div className="h-full py-4 px-5 text-sm text-global-red font-semibold flex items-center justify-center border border-global-red border-opacity-70 rounded">
      {message}
    </div>
  )
}

export default Alert
