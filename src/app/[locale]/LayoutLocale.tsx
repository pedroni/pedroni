import { hasLocale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { ReactNode } from 'react'
import { routing } from '../../i18n/routing'

type LayoutLocaleProps = {
  children: ReactNode
  params: Promise<{ locale: string }>
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
