'use client'

import { useMemo, useState } from 'react'
import Box from './Box'
import BoxContent from './BoxContent'
import Button from './Button'
import Title from './Title'
import { markdownToHtml, scrollTo } from '../helpers'
import HomeAboutAside from './HomeAboutAside.client'

interface ListItem {
  key: string
  label: string
  title: string
  content: string
}

interface HomeAboutClientProps {
  list: ListItem[]
  initialActiveKey?: string
  contactButtonText: string
}

const HomeAboutClient = ({
  list,
  initialActiveKey = 'about',
  contactButtonText
}: HomeAboutClientProps) => {
  const [activeListKey, setActiveListKey] = useState(initialActiveKey)

  const content = useMemo(() => {
    const item = list.find(item => item.key === activeListKey)
    if (!item) return undefined

    return {
      ...item,
      content: markdownToHtml(item.content)
    }
  }, [activeListKey, list])

  const onListItemSelected = (key: string) => setActiveListKey(key)

  if (!content) {
    return <></>
  }

  return (
    <Box
      aside={
        <div className="hidden lg:block">
          <HomeAboutAside
            activeListKey={activeListKey}
            onListItemSelected={onListItemSelected}
            list={list}
          />
        </div>
      }
    >
      <div className="lg:hidden">
        <HomeAboutAside
          activeListKey={activeListKey}
          onListItemSelected={onListItemSelected}
          list={list}
        />
      </div>

      <Title subTitle={content.label} title={<h2>{content.title}</h2>} />

      <BoxContent>
        <div dangerouslySetInnerHTML={{ __html: content.content }} />
        <Button className="mt-6" onClick={() => scrollTo('#contact')}>
          {contactButtonText}
        </Button>
      </BoxContent>
    </Box>
  )
}

export default HomeAboutClient
