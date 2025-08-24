import { hasLocale } from 'next-intl'
import { ReactNode } from 'react'
import { routing } from '../../i18n/routing'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'

export default async function LayoutLocale(props: {
  children: ReactNode
  params: Promise<{locale: string}>
}) {
  const { locale } = await props.params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  // Enable static rendering
  setRequestLocale(locale)

  return props.children
}
