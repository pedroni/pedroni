'use server'

import { cookies } from 'next/headers'
import { LocaleKey } from './routing'

export async function getCurrentLocale() {
  const locale = (await cookies()).get('NEXT_LOCALE')?.value as
    | LocaleKey
    | undefined
  return locale || 'en'
}
