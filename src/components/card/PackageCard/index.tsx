import React from 'react'
import { CardContent, CardHeader, CardMedia, Typography } from '@mui/material'

import { useTranslation } from 'next-i18next'

import Image from 'next/image'
import { PuzzleIcon } from '@assets/icon/PuzzleIcon'

import styles from './styles.module.scss'

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
  const { t: translate } = useTranslation()

  const titleText = translate(title)
  const seasonText = translate(season)
  const lessonText = translate(lesson)

  return (
    <div className={styles['package-card']}>
      <CardHeader avatar={<PuzzleIcon />} />
      <CardMedia>
        <Image src={image} alt="s" width="112" height="96" />
      </CardMedia>
      <CardContent>
        <Typography variant="h6">{titleText}</Typography>
        <Typography>{seasonText}</Typography>
        <Typography>{lessonText}</Typography>
      </CardContent>
    </div>
  )
}

export default PackageCard
