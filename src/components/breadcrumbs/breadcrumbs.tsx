import React, { useState, useEffect } from 'react'

import { BreadcrumbsList, BreadcrumbsItems } from '@framework/types'

type BreadcrumbsProps = {
  data: BreadcrumbsList
  title?: string
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ data, title }) => {
  const [breadcrumList, setbreadcrumList] = useState()
  const array = []

  const handelChildren = (data: BreadcrumbsList) => {
    array?.push(data)
    if (data?.parent !== null) {
      handelChildren(data?.parent)
    } else {
      return array
    }
  }

  useEffect(() => {
    handelChildren(data)

    setbreadcrumList(array)
  }, [])

  return (
      <></>
  )
}

export default Breadcrumbs
