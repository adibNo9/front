import React from 'react'

import cn from 'classnames'
interface Props {
  className?: string
  children?: any
  el?: HTMLElement
  clean?: boolean
}

const CardContainer: React.FC<Props> = ({
  children,
  className,
  el = 'div',
  clean,
}) => {
  const rootClassName = cn(className, {
    'lg:mx-auto mx-4 bg-white rounded-xl px-4 py-4 border-2 border-gray-100 rounded-lg ':
      !clean,
  })

  const Component: React.ComponentType<React.HTMLAttributes<HTMLDivElement>> =
    el as any

  return <Component className={rootClassName}>{children}</Component>
}

export default CardContainer
