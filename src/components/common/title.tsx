import React from 'react'
import Image from 'next/image'

type TitleProps = {
  text?: string
  className?: string
  icon?: string
  iconComponent?: any
  el?: string
}

const Title: React.FC<TitleProps> = ({
  text,
  className,
  icon,
  iconComponent,
  el = 'h2',
}) => {
  const Component: React.ComponentType<React.HTMLAttributes<HTMLDivElement>> =
    el as any
  return (
    <Component className={className}>
      {iconComponent}
      {icon && (
        <Image
          src={`${process.env.NEXT_PUBLIC_REST_IMAGE_BASE_URL}${icon}`}
          width={25}
          height={25}
          alt={text}
          quality={100}
        />
      )}

      {text}
    </Component>
  )
}

export default Title
