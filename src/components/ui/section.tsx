import React from 'react'
import cn from 'classnames'

interface Props {
  className?: string
  backgroundImage?: string
  children?: any
  el?: HTMLElement
  clean?: boolean
}

const Section: React.FC<Props> = ({
  children,
  className,
  backgroundImage,
  el = 'section',
}) => {
  const Component: React.ComponentType<React.HTMLAttributes<HTMLDivElement>> =
    el as any

  return (
    <Component
      className={cn(className)}
      style={{
        backgroundImage,
      }}
    >
      {children}
    </Component>
  )
}

export default Section
