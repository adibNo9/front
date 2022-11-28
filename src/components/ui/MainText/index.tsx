import { Trans } from 'next-i18next';
import { FC } from 'react';


interface TextProps {
  className?: string
  color?: string
  weight?: string
  size?: string
  onClick?: () => void
  children?: ReactNode
  value?: ReactNode
  decoration?: string
  components?: any
}

const MainText: FC<TextProps> = ({
  color,
  weight,
  size,
  onClick,
  children,
  decoration,
  value,
}) => {
  return (
    <span
      onClick={onClick}
      style={{
        color: color,
        fontWeight: weight,
        fontSize: size,
        textDecoration: decoration,
      }}
    >
      <Trans i18nKey={value}>{children}</Trans>
    </span>
  )
}

export default MainText
