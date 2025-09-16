import { getTranslations } from 'next-intl/server'
import HomeContactFormClient from './HomeContactForm.client'

interface HomeContactFormProps {
  style?: React.CSSProperties
}

export default async function HomeContactForm({ style }: HomeContactFormProps) {
  const t = await getTranslations('HomeContactForm')

  const translations = {
    nameLabel: t('nameLabel'),
    contactLabel: t('contactLabel'),
    subjectLabel: t('subjectLabel'),
    sendButton: t('sendButton'),
    sending: t('sending'),
    errorMessage: t('errorMessage')
  }

  return <HomeContactFormClient translations={translations} style={style} />
}
