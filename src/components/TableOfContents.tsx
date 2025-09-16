'use server';
import { getTranslations } from 'next-intl/server'
import TableOfContentsClient from './TableOfContents.client'
import { Heading } from './TableOfContents.client'

interface TableOfContentsProps {
  headings: Heading[]
  className?: string
}

export default async function TableOfContents({
  headings,
  className = ''
}: TableOfContentsProps) {
  const t = await getTranslations('Words')

  const translations = {
    tableOfContents: t('tableOfContents')
  }

  return (
    <TableOfContentsClient
      headings={headings}
      className={className}
      translations={translations}
    />
  )
}
