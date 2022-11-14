import React from 'react'

import Image from 'next/image'
import { CardHeader, CardContent, CardMedia, Typography } from '@mui/material'
import { PuzzleIcon } from '@assets/icon/PuzzleIcon'
import styles from './styles.module.scss'
import { useTranslation } from 'next-i18next'

export interface IPackageCard {
  image: string
  title: string
  season: string
  lesson: string
}

const PackageCard: React.FC<IPackageCard> = ({
  image,
  title,
  season,
  lesson,
}) => {
  const { t } = useTranslation()

  return (
    <div className={styles['package-card']}>
      <CardHeader avatar={<PuzzleIcon />} />
      <CardMedia>
        <Image src={image} alt="s" width="112" height="96" />
      </CardMedia>
      <CardContent>
        <Typography variant="h6">{t(title)}</Typography>
        <Typography variant="body2">{t(season)}</Typography>
        <Typography variant="body2">{t(lesson)}</Typography>
      </CardContent>
    </div>
  )
}

export default PackageCard
