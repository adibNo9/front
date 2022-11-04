import React from 'react'

interface DividerProps {
  className?: string
}

const Divider: React.FC<DividerProps> = ({ className = '' }) => {
  return <div className={`border-t border-gray-100 ${className}`} />
}

export default Divider
