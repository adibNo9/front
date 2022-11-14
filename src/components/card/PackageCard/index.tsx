import React from 'react'

import Image from 'next/image'
import { CardHeader, CardContent, CardMedia, Typography } from '@mui/material'
import { PuzzleIcon } from '@assets/icon/PuzzleIcon'
import styles from './styles.module.scss'

export interface IPackageCard {
  image?: string
  title?: string
  season?: string
  leason?: string
}

const PackageCard: React.FC<IPackageCard> = ({
  image,
  title,
  season,
  leason,
}) => {
  return (
    <div className={styles['package-card']}>
      <CardHeader avatar={<PuzzleIcon />} />
      <CardMedia>
        <Image src={image} alt="s" width="112" height="96" />
      </CardMedia>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">{season}</Typography>
        <Typography variant="body2">{leason}</Typography>
      </CardContent>
    </div>
  )
}

export default PackageCard
