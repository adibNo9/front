import cn from 'classnames'
import React, { forwardRef, ButtonHTMLAttributes } from 'react'
import Link from '@components/ui/link'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  specialClassName?: string
  className?: string
  variant?: 'primary' | 'secondary' | 'primary-outline'
  active?: boolean
  type?: 'submit' | 'reset' | 'button'
  loading?: boolean
  disabled?: boolean
  icon?: any
  seeMore?: boolean
  href?: string | undefined
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    specialClassName,
    className,
    variant = 'primary',
    children,
    active,
    loading = false,
    disabled = false,
    icon,
    seeMore,
    href,
    ...rest
  } = props

  const rootClassName = cn(
    'items-center cursor-pointer transition ease-in-out duration-300 font-semibold text-center justify-center  rounded-md placeholder-white focus-visible:outline-none focus:outline-none btn',
    {
      'btn-primary': variant === 'primary',
      'btn-primary-outline': variant === 'primary-outline',
      secondary: variant === 'secondary',
      'see-more': seeMore,
      'cursor-not-allowed': loading,
      'cursor-not-allowed hover:cursor-not-allowed': disabled,
    },
    className,
  )

  return (
    <button
      aria-pressed={active}
      data-variant={variant}
      ref={ref}
      className={specialClassName ?? rootClassName}
      disabled={disabled}
      {...rest}
    >
      {href
        ? (
        <Link href={href}>
          {icon}

          {children}
          {loading && (
            <svg
              className="animate-spin -me-1 ms-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          )}
        </Link>
          )
        : (
        <>
          {icon}

          {children}
          {loading && (
            <svg
              className="animate-spin -me-1 ms-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          )}
        </>
          )}
    </button>
  )
})

export default Button
