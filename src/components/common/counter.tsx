import React from 'react'
import MinusIcon from '@components/icons/minus-icon'
import PlusIcon from '@components/icons/plus-icon'
import cn from 'classnames'
type CounterProps = {
  quantity?: number
  onDecrement: (e: any) => void
  onIncrement: (e: any) => void
  disableIncrement?: boolean
  disableDecrement?: boolean
  variant?: 'default' | 'dark'
  className?: string
}
const Counter: React.FC<CounterProps> = ({
  quantity,
  onDecrement,
  onIncrement,
  disableIncrement = false,
  disableDecrement = false,
  variant = 'default',
}) => {
  const size = variant !== 'dark' ? '12px' : '10px'
  return (
    <div
      className={cn(
        'group flex items-center justify-between rounded-md overflow-hidden flex-shrink-0  h-5',
        {
          'border h-7 md:h-8 border-gray-300': variant === 'default',
          'h-5 md:h-5 shadow-navigation bg-heading': variant === 'dark',
        },
      )}
    >
      <button
        onClick={onDecrement}
        className={cn(
          'flex items-center justify-center flex-shrink-0 h-full transition ease-in-out duration-300 focus:outline-none',
          {
            'w-5 md:w-7 text-heading border-e border-gray-300 hover:text-white hover:bg-heading':
              variant === 'default',
            'w-5 md:w-7 text-white bg-heading hover:bg-gray-600 focus:outline-none':
              variant === 'dark',
          },
        )}
        disabled={disableDecrement}
      >
        <MinusIcon width={size} />
      </button>

      <span
        className={cn(
          'font-semibold flex items-center justify-center h-full  transition-colors duration-250 ease-in-out cursor-default flex-shrink-0',
          {
            'text-base text-heading w-5  md:w-10 xl:w-10':
              variant === 'default',
            'text-sm text-white w-8 md:w-5 ': variant === 'dark',
          },
        )}
      >
        {quantity}
      </span>

      <button
        onClick={onIncrement}
        className={cn(
          'flex items-center justify-center h-full flex-shrink-0 transition ease-in-out duration-300 focus:outline-none',
          {
            'w-5 md:w-7  text-heading border-s border-gray-300 hover:text-white hover:bg-heading':
              variant === 'default',
            'w-5 md:w-7 text-white bg-heading hover:bg-gray-600 focus:outline-none':
              variant === 'dark',
          },
        )}
        disabled={disableIncrement}
      >
        <PlusIcon width={size} height={size} />
      </button>
    </div>
  )
}
export default Counter
