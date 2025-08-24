/** eslint-disable no-unused-vars */
/** eslint-disable no-unused-vars */
import { useMemo, useState } from 'react'
import Box from './Box'
import BoxContent from './BoxContent'
import BoxList from './BoxList'
import Button from './Button'
import Title from './Title'
import { calculateYears, markdownToHtml, scrollTo } from '../helpers'
import { useMessages, useTranslations } from 'next-intl'

const HomeAbout = () => {
  const [activeListKey, setActiveListKey] = useState('about')

  const t = useTranslations('HomeAbout')
  const messages = useMessages()
  
  const list = useMemo(() => {
    const contentKeys = Object.keys(messages.HomeAbout?.content || {})
    return contentKeys.map(key => ({
      key,
      label: t(`content.${key}.label`),
      title: t(`content.${key}.title`),
      content: t(`content.${key}.content`, {
        age: calculateYears('1997-03-30'),
        experience: calculateYears('2017-03-01')
      })
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

  const onListItemSelected = key => setActiveListKey(key)

  if (!content) {
    return <></>
  }

  return (
    <Box
      aside={
        <div className="hidden xl:block">
          <HomeAboutAside
            activeListKey={activeListKey}
            onListItemSelected={onListItemSelected}
            list={list}
          />
        </div>
      }
    >
      <Title subTitle={content.label} title={<h2>{content.title}</h2>} />
      <div className="xl:hidden">
        <HomeAboutAside
          activeListKey={activeListKey}
          onListItemSelected={onListItemSelected}
          list={list}
        />
      </div>

      <BoxContent>
        <div dangerouslySetInnerHTML={{ __html: content.content }} />
        <Button className='mt-6' onClick={() => scrollTo('#contact')}>{t('contactButton')}</Button>
      </BoxContent>
    </Box>
  )
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
const HomeAboutAside = ({ activeListKey, onListItemSelected = key => {}, list }) => {
  const content = useMemo(() => list.find(item => item.key === activeListKey) || {}, [activeListKey, list])

  const _onListItemSelected = content => onListItemSelected(content?.key)

  return (
    <>
      <img
        src="/img/01.png"
        height="160"
        srcSet="/img/01.png 1x, /img/01@2x.png 2x,"
        alt=""
        className="brightness--2 hide-mobile"
        style={{ marginBottom: 16 }}
      />
      <BoxList
        list={list}
        onItemSelected={_onListItemSelected}
        activeItem={content}
      ></BoxList>
    </>
  )
}

export default HomeAbout
