'use server'

import { calculateYears } from '../helpers'
import { getTranslations } from 'next-intl/server'
import HomeAboutClient from './HomeAbout.client'

interface ListItem {
  key: string
  label: string
  title: string
  content: string
}

const HomeAbout = async () => {
  const t = await getTranslations('HomeAbout')

  const contentKeys = ['about', 'studies']
  const list: ListItem[] = contentKeys.map(key => ({
    key,
    label: t(`content.${key}.label`),
    title: t(`content.${key}.title`),
    content: t(`content.${key}.content`, {
      age: calculateYears('1997-03-30'),
      experience: calculateYears('2017-03-01')
    })
  }))

  return <HomeAboutClient list={list} contactButtonText={t('contactButton')} />
}

export default HomeAbout
