import React from 'react'
import Image from 'next/image'

import Link from '@components/ui/link'
import { ROUTES } from '@utils/routes'
import { ProductItem } from '@framework/types'

type SmallCardProps = {
  item?: ProductItem
}

const SmallCard: React.FC<SmallCardProps> = ({ item }) => {
  return (
    <>
      {item && (
        <div className="fp-item">
          <Link href={`${ROUTES.PRODUCT}/${item?.slug}/`}>
            {item?.thumbnail?.path && (
              <Image
                src={`${process.env.NEXT_PUBLIC_REST_PRODUCT_IMAGE_BASE_URL}${item?.thumbnail?.path}`}
                width={item?.thumbnail?.with ?? 210}
                height={item?.thumbnail?.height ?? 220}
                className={'fp-img'}
                alt={item?.thumbnail?.alt}
              />
            )}

            {item.price && <div className="price">{item.price}</div>}
          </Link>
        </div>
      )}
    </>
  )
}

export default SmallCard
