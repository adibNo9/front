import React, { FC } from 'react'

type TabsProps = {
  tabs: {
    label: string
    index: number
    Component?: FC<{ index: number; data: any }>
    data: any
  }[]
  selectedTab: number
  onClick: (index: number) => void
  orientation?: 'horizontal' | 'vertical'
  className?: string
}

/**
 * Avalible Props
 * @param className string
 * @param tab Array of object
 * @param selectedTab number
 * @param onClick Function to set the active tab
 * @param orientation Tab orientation Vertical | Horizontal
 */
const Tabs: FC<TabsProps> = ({
  className = 'tabs-component',
  tabs = [],
  selectedTab = 0,
  onClick,
  orientation = 'horizontal',
}) => {
  const Panel = tabs && tabs?.find(tab => tab?.index === selectedTab)
  return (
    <div
      className={
        orientation === 'vertical' ? className + ' vertical' : className
      }
    >
      <div
        role="tablist"
        className="lg:border-b lg:border-gray-100 mb-3"
        aria-orientation={orientation}
      >
        {tabs?.map(tab => (
          <button
            className={`ml-5 pb-2 ${
              selectedTab === tab?.index ? 'active' : ''
            }`}
            onClick={() => onClick(tab?.index)}
            key={tab?.index}
            type="button"
            role="tab"
            aria-selected={selectedTab === tab?.index}
            aria-controls={`tabpanel-${tab?.index}`}
            tabIndex={selectedTab === tab?.index ? 0 : -1}
            id={`btn-${tab?.index}`}
          >
            {tab?.label}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        aria-labelledby={`btn-${selectedTab}`}
        id={`tabpanel-${selectedTab}`}
      >
        {Panel && (
          <Panel.Component index={selectedTab} data={tabs[selectedTab]?.data} />
        )}
      </div>
    </div>
  )
}
export default Tabs
