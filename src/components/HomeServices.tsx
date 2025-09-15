'use server'
import { getTranslations } from 'next-intl/server'
import HomeServicesClient from './HomeServices.client'

interface ListItem {
  key: string
  label: string
  title: string
  content: string
}

const HomeServices = async () => {
  const t = await getTranslations('HomeServices')

  const contentKeys = ['services', 'apps', 'websites', 'ecommerce']
  const list: ListItem[] = contentKeys.map(key => ({
    key,
    label: t(`content.${key}.label`),
    title: t(`content.${key}.title`),
    content: t(`content.${key}.content`)
  }))

  return <HomeServicesClient list={list} contactButtonText={t('contactButton')} />
}

export default HomeServices
