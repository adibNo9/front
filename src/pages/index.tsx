import React from 'react'
import PackageCard from '@components/card/PackageCard'
import image from '@assets/images/package-image.png'

const index = () => {
  return (
    <div>
      <PackageCard
        image={image.src}
        title=" بسته زیست شناسی"
        season="فصل اول: جهان هستی"
        lesson="درس: چهارم "
      />
    </div>
  )
}

export default index
