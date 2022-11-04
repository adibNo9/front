import { useRouter } from 'next/router'

import { Drawer } from '@components/common/drawer/drawer'
import { getDirection } from '@utils/get-direction'

const ManagedDrawer = () => {
  const { locale } = useRouter()
  const dir = getDirection(locale)
  const contentWrapperCSS = dir === 'ltr' ? { right: 0 } : { left: 0 }
  return (
    <Drawer
      placement={dir === 'rtl' ? 'left' : 'right'}
      handler={false}
      showMask={true}
      level={null}
      contentWrapperStyle={contentWrapperCSS}
    >
    </Drawer>
  )
}

export default ManagedDrawer
