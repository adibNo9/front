import React from 'react'

import cn from 'classnames'
interface Props {
  className?: string
  children?: any
  el?: HTMLElement
  clean?: boolean
  id?: string
}

const Container: React.FC<Props> = ({
  children,
  className,
  el = 'div',
  clean,
  id,
}) => {
  const rootClassName = cn(className, {
    'mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16': !clean,
  })

  const Component: React.ComponentType<React.HTMLAttributes<HTMLDivElement>> =
    el as any

  return <Component id={id} className={rootClassName}>{children}</Component>
}

export default Container
