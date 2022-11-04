import React, { useState } from 'react'
import cn from 'classnames'
import { motion, AnimatePresence } from 'framer-motion'
import { heightCollapse } from '@utils/motion/height-collapse'
import { useTranslation } from 'next-i18next'

type CollapseProps = {
  i: number
  titleKey?: string
  title?: string
  titleComponent?: any
  content?: any
  contentKey?: any
  expanded: number
  translatorNS: string
  setExpanded: any
  variant?: 'gray' | 'transparent'
  children?: ChildNode
}

export const Collapse: React.FC<CollapseProps> = ({
  i,
  children,
  expanded,
  setExpanded,
  titleKey,
  title,
  titleComponent,
  content,
  contentKey,
  translatorNS,
  variant = 'gray',
}) => {
  const isOpen = i === expanded

  const { t } = useTranslation(translatorNS)
  return (
    <div
      className={cn({
        'rounded-md': variant === 'gray',
        'shadow-sm': isOpen,
      })}
    >
      <motion.header
        initial={false}
        onClick={() => setExpanded(isOpen ? false : i)}
        className={cn(
          'cursor-pointer flex items-center justify-between transition-colors',
          {
            'p-2': variant === 'gray',
            'border-t border-gray-300': variant === 'transparent',
          },
        )}
      >
        {titleComponent || (
          <h2
            className={cn(
              'text-sm font-semibold leading-relaxed text-heading pe-2',
              {
                'md:text-base': variant === 'gray',
                'md:text-base lg:text-lg': variant === 'transparent',
              },
            )}
          >
            {titleKey ? t(titleKey) : title}
          </h2>
        )}

        <div
          className={` transform  border-brand-font  transition-transform duration-500 ease-in-out relative chevron ${
            isOpen ? '' : 'bottom'
          }`}
        />
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="from"
            animate="to"
            exit="from"
            variants={heightCollapse()}
          >
            <div
              className={cn('pb-2 leading-7 text-sm ', {
                'pt-4 border-t border-gray-300 px-2 mt-2': variant === 'gray',
              })}
            >
              {children || (contentKey ? t(contentKey) : content)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

type AccordionProps = {
  translatorNS: string
  items: {
    children?: any
    titleComponent?: any
    titleKey?: string
    title?: string
    contentKey?: string
    content?: string
  }[]
  variant?: 'gray' | 'transparent'
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  translatorNS,
  variant = 'gray',
}) => {
  const [expanded, setExpanded] = useState<number>(0)

  return (
    <>
      {items?.map((item, index) => (
        <Collapse
          i={index}
          key={item.titleKey}
          titleKey={item.titleKey}
          contentKey={item.contentKey}
          expanded={expanded}
          setExpanded={setExpanded}
          variant={variant}
          translatorNS={translatorNS}
          titleComponent={item.titleComponent}
        >
          {item?.children}
        </Collapse>
      ))}
    </>
  )
}

export default Accordion
