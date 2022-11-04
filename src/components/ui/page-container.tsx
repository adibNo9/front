import React from 'react'

import cn from 'classnames'
interface Props {
  className?: string
  children?: any
  el?: HTMLElement
  clean?: boolean
}

const PageContainer: React.FC<Props> = ({
  children,
  className,
  clean,
  el = 'div',
}) => {
  const rootClassName = cn(className, {
    'mx-auto 2xl:max-w-screen-2xl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md':
      !clean,
  })

  const Component: React.ComponentType<React.HTMLAttributes<HTMLDivElement>> =
    el as any

  return <Component className={rootClassName}>{children}</Component>
}

export default PageContainer
