import { hasLocale } from 'next-intl'
import { ReactNode } from 'react'
import { routing } from '../../i18n/routing'
import { notFound } from 'next/navigation'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import { Metadata } from 'next'
import { calculateYears } from '../../helpers'

type LayoutLocaleProps = {
  children: ReactNode
  params: Promise<{locale: string}>
}

export async function generateMetadata(props: LayoutLocaleProps): Promise<Metadata> {
  const { locale } = await props.params
  
  if (!hasLocale(routing.locales, locale)) {
    return {
      title: 'Page Not Found',
      description: 'The requested page could not be found.'
    }
  }

  const t = await getTranslations('SEO')
  
  return {
    title: t('siteTitle'),
    description: t('siteDescription', {
      years: calculateYears('2017-03-01')
    }),
  }
}

export default async function LayoutLocale(props: LayoutLocaleProps) {
  const { locale } = await props.params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  // Enable static rendering
  setRequestLocale(locale)

  return props.children
}
