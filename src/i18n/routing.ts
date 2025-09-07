import { defineRouting } from 'next-intl/routing'
export const locales = ['en', 'pt'] as const
export type LocaleKey = (typeof locales)[number]

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: locales,
  localeDetection: true,
  localePrefix: 'as-needed',

  // Used when no locale matches
  defaultLocale: 'en'
})
