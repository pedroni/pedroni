'use client'

import { useMemo, useState } from 'react'
import Box from './Box'
import Title from './Title'
import BoxContent from './BoxContent'
import Button from './Button'
import { markdownToHtml, scrollTo } from '../helpers'
import HomeServicesAside from './HomeServicesAside.client'

interface ListItem {
  key: string
  label: string
  title: string
  content: string
}

interface HomeServicesClientProps {
  list: ListItem[]
  contactButtonText: string
  initialActiveKey?: string
}

const HomeServicesClient = ({
  list,
  contactButtonText,
  initialActiveKey = 'services'
}: HomeServicesClientProps) => {
  const [activeListKey, setActiveListKey] = useState(initialActiveKey)

  const content = useMemo(() => {
    const item = list.find(item => item.key === activeListKey)
    if (!item) return undefined

    return {
      ...item,
      content: markdownToHtml(item.content)
    }
  }, [activeListKey, list])

  const onListKeySelected = (key: string) => setActiveListKey(key)

  if (!content) {
    return <></>
  }

  return (
    <Box
      className="mt-4 lg:mt-16"
      aside={
        <div className="hidden lg:block">
          <HomeServicesAside
            activeListKey={activeListKey}
            onListKeySelected={onListKeySelected}
            list={list}
          />
        </div>
      }
    >
      <div className="lg:hidden">
        <HomeServicesAside
          activeListKey={activeListKey}
          onListKeySelected={onListKeySelected}
          list={list}
        />
      </div>
      <Title subTitle={content.label} title={<h2>{content.title}</h2>} />
      <BoxContent>
        <div dangerouslySetInnerHTML={{ __html: content.content }} />
        <br />
        <br />
        <Button onClick={() => scrollTo('#contact')}>
          {contactButtonText}
        </Button>
      </BoxContent>
    </Box>
  )
}

export default HomeServicesClient
