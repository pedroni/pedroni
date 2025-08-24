import React, { useMemo, useState } from 'react'
import Box from './Box'
import Title from './Title'
import BoxContent from './BoxContent'
import BoxList from './BoxList'
import Button from './Button'
import useMobile from '../hooks/useMobile'
import { markdownToHtml, scrollTo } from '../helpers'
import { useMessages, useTranslations } from 'next-intl'

const HomeServices = () => {
  const [activeListKey, setActiveListKey] = useState('services')
  const isMobile = useMobile()
  const t = useTranslations('HomeServices')
  const messages = useMessages()

  const list = useMemo(() => {
    const contentKeys = Object.keys(messages.HomeServices?.content || {})
    return contentKeys.map(key => ({
      key,
      label: t(`content.${key}.label`),
      title: t(`content.${key}.title`),
      content: t(`content.${key}.content`)
    }))
  }, [t, messages])

  const content = useMemo(() => {
    const item = list.find(item => item.key === activeListKey)
    if (!item) return undefined

    return {
      ...item,
      content: markdownToHtml(item.content)
    }
  }, [activeListKey, list])

  if (!content) {
    return <></>
  }

  return (
    <Box
      style={{
        marginTop: isMobile ? 16 : 64
      }}
      aside={
        !isMobile && (
          <HomeServicesAside
            activeListKey={activeListKey}
            onListKeySelected={setActiveListKey}
          />
        )
      }
    >
      <Title subTitle={content.label} title={<h2>{content.title}</h2>} />
      {isMobile && (
        <HomeServicesAside
          activeListKey={activeListKey}
          onListKeySelected={setActiveListKey}
        />
      )}
      <BoxContent>
        <div dangerouslySetInnerHTML={{ __html: content.content }} />
        <br />
        <br />
        <Button onClick={() => scrollTo('#contact')}>{t('contactButton')}</Button>
      </BoxContent>
    </Box>
  )
}

const HomeServicesAside = ({
  activeListKey,
  onListKeySelected = () => {}
}: {
  activeListKey: string,
  onListKeySelected: (param: string) => void;
}) => {
  const t = useTranslations('HomeServices.content')
  const messages = useMessages()

  const list = useMemo(() => {
    const contentKeys = Object.keys(messages.HomeServices?.content || {})
    return contentKeys.map(key => ({
      key,
      label: t(`${key}.label`),
      title: t(`${key}.title`),
      content: t(`${key}.content`)
    }))
  }, [t, messages])

  const content = useMemo(() => list.find(item => item.key === activeListKey), [activeListKey, list])

  const _onListKeySelected = content => onListKeySelected(content?.key)

  return (
    <>
      <img
        src="/img/03.png"
        height="160"
        srcSet="/img/03.png 1x, /img/03@2x.png 2x,"
        alt=""
        className="brightness--2 hide-mobile"
        style={{ marginBottom: 16 }}
      />
      <BoxList
        list={list}
        onItemSelected={_onListKeySelected}
        activeItem={content}
      ></BoxList>
    </>
  )
}

export default HomeServices
