import { useMessages, useTranslations } from 'next-intl'
import { calculateYears, markdownToHtml } from '../helpers'

export interface HomeAboutContentItem {
  key: string
  label: string
  title: string
  content: string
}

export const useHomeAboutContent = () => {
  const t = useTranslations('HomeAboutContent')
  const messages = useMessages()


  const keys = Object.keys(messages.HomeAboutContent || {})

  const getContent = (key: string): HomeAboutContentItem | undefined => {
    if (!keys.includes(key)) return undefined

    return {
      key,
      label: t(`${key}.label`),
      title: t(`${key}.title`),
      content: t(`${key}.content`, {
        age: calculateYears('1997-03-30'),
        experience: calculateYears('2017-03-01')
      })
    }
  }

  const getAllContent = (): HomeAboutContentItem[] => {
    return keys.map(key => getContent(key)!).filter(Boolean)
  }

  const getContentWithHtml = (key: string) => {
    const content = getContent(key)
    if (!content) return undefined

    return {
      ...content,
      content:  markdownToHtml(content.content)
    }
  }

  return {
    getContent,
    getAllContent,
    getContentWithHtml,
    keys
  }
}
