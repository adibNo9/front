import React from 'react'
import { Swiper } from 'swiper/react'
import { useRouter } from 'next/router'
import { Navigation, Scrollbar, Pagination, Autoplay } from 'swiper'
import { getDirection } from '@utils/get-direction'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/scrollbar'

type CarouselPropsType = {
  className?: string
  buttonGroupClassName?: string
  prevActivateId?: string
  nextActivateId?: string
  prevButtonClasses?: string
  nextButtonClasses?: string
  buttonSize?: 'default' | 'small'
  paginationVariant?: 'default' | 'circle'
  paginationPosition?: 'center' | 'left' | 'right'
  loop?: boolean
  centeredSlides?: boolean
  breakpoints?: {} | any
  pagination?: {} | any
  navigation?: {} | any
  scrollbar?: {} | any
  autoplay?: {} | any
}

const Carousel: React.FunctionComponent<CarouselPropsType> = ({
  children,
  className = '',
  buttonGroupClassName = '',
  prevActivateId = '',
  nextActivateId = '',
  prevButtonClasses = 'start-0',
  nextButtonClasses = 'end-0',
  buttonSize = 'default',
  paginationVariant = 'default',
  paginationPosition,
  breakpoints,
  loop = true,
  navigation = true,
  pagination = false,
  autoplay = false,
  ...props
}) => {
  const { locale } = useRouter()
  const dir = getDirection(locale)
  const classPagination = paginationPosition
    ? `pagination-${paginationPosition}`
    : ''

  return (
    <div
      className={`carouselWrapper relative ${className} ${classPagination} ${
        paginationVariant === 'circle' ? 'dotsCircle' : ''
      }`}
    >
      <Swiper
        modules={[Navigation, Autoplay, Pagination, Scrollbar]}
        loop={loop}
        observer={true}
        autoplay={autoplay}
        breakpoints={breakpoints}
        pagination={pagination}
        dir={dir}
        navigation={navigation}
        {...props}
      >
      </Swiper>

    </div>
  )
}

export default Carousel
