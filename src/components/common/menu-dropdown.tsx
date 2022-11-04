import { Dropdown, Menu, Space } from 'antd'
import React, { useRef } from 'react'
import { useTranslation } from 'next-i18next'
import { iconColor, iconSize } from '@shared/constant'

import KalaDigital from '@components/icons/menu/kaladigital'
import MenuCat from '@components/icons/common/menu-cat'
import Salamat from '@components/icons/menu/salamat'
import Toy from '@components/icons/menu/toy'
import Pooshak from '@components/icons/menu/pooshak'
import Abzar from '@components/icons/menu/abzar'

type SideBarType = {
  userShops?: any
}
const MenuDropDown: React.FC<SideBarType> = userShops => {
  const { t } = useTranslation('common')
  const tRef = useRef(t)

  const menu = (
    <Menu
      items={[
        {
          label: (
            <a
              href="/"
              className="bg-gray-100 opacity-100 font-bold text-brand-font"
            >
              <span className="flex items-center gap-1 ">
                <KalaDigital />
                مرطوب کننده
              </span>
            </a>
          ),
          key: '0',
        },
        {
          label: (
            <a
              href="/"
              className="bg-gray-100 opacity-100 font-bold text-brand-font"
            >
              <span className="flex items-center gap-1 ">
                <Abzar />
                بهداشت شخصی
              </span>
            </a>
          ),
          key: '1',
        },

        {
          label: (
            <a
              href="/"
              className="bg-gray-100 opacity-100 font-bold text-brand-font"
            >
              <span className="flex items-center gap-1 ">
                <Pooshak />
                کرم و نرم کننده
              </span>
            </a>
          ),
          key: '3',
        },
        {
          label: (
            <a
              href="/"
              className="bg-gray-100 opacity-100 font-bold text-brand-font"
            >
              <span className="flex items-center gap-1 ">
                <Toy />
                عطر و ادکلن
              </span>
            </a>
          ),
          key: '4',
        },
        {
          label: (
            <a
              href="/"
              className="bg-gray-100 opacity-100 font-bold text-brand-font"
            >
              <span className="flex items-center gap-1 ">
                <Salamat />
                بهداشت سر و مو
              </span>
            </a>
          ),
          key: '5',
        },
      ]}
    />
  )

  return (
    <Dropdown overlay={menu} trigger={['hover']}>
      <Space>
        <div>
          <MenuCat
            height={iconSize[6]}
            width={iconSize[6]}
            color={iconColor.dark}
          />
          {tRef.current('bazar.header.menu-category')}
        </div>
      </Space>
    </Dropdown>
  )
}

export default MenuDropDown
