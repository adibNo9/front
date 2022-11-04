import React, { useCallback, useRef } from 'react'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'

import Tag3dScanIcon from '@components/icons/tag-3d-scan-icon'
import TagFastDeliveryIcon from '@components/icons/tag-fast-delivery-icon'
import Link from '@components/ui/link'
import Button from '@components/ui/button'
import { ROUTES } from '@utils/routes'

type LargCardProps = {
  item?: any
  productCard?: boolean
}

const LargCard: React.FC<LargCardProps> = ({ item, productCard }) => {
  const { t } = useTranslation('common')
  const tRef = useRef(t)
  const likeHandler = useCallback(() => {}, [])
  const placeholderImage = ''
  const image = item?.thumbnail?.path
    ? process.env.NEXT_PUBLIC_REST_PRODUCT_IMAGE_BASE_URL +
      item?.thumbnail?.path
    : placeholderImage
  return (
    <div className="card-container relative flex-col 	lg:justify-between bg-light-50 rounded-xl lg:h-full p-3  border border-gray-100">
      {' '}
      <Button
        href={likeHandler()}
        specialClassName="like-btn absolute top-1 right-1 z-50"
      ></Button>
      <Link href={`${ROUTES.PRODUCT}/${item.slug}/` ?? '/'}>
        <div className="card-image -mt-2">
          <Image
            src={image}
            width={(item.thumbnail && item.thumbnail.width) ?? 238}
            height={(item.thumbnail && item.thumbnail.height) ?? 254}
            quality={100}
            alt={item?.title}
          />
        </div>
        <h3 className="card-title">{item.title}</h3>

        <div className="card-price-info">
          {item?.discount && (
            <>
              <s>{item.price}</s>
              <span className="d-percent">
                {tRef.current('bazar.global.percent')}
                {parseInt(item.discount)}
              </span>
            </>
          )}

          {item.final_price && (
            <span className="price">{item.final_price}</span>
          )}
        </div>
        {productCard && (
          <div className="card-tags">
            <span className="flex items-center">
              <span className="px-0">
                <TagFastDeliveryIcon />
              </span>
              {tRef.current('bazar.global.fast-delivery')}
            </span>
            <span className="flex items-center">
              <span className="px-0">
                <Tag3dScanIcon />
              </span>
              {tRef.current('bazar.global.ready-to-deliver')}
            </span>
            {/* todo  */}
            {/* <span>
              <TagFastDeliveryIcon />
              {tRef.current('bazar.global.free-delivery')}
            </span> */}
          </div>
        )}
      </Link>
    </div>
  )
}

export default LargCard
