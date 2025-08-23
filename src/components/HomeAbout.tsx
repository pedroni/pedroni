/** eslint-disable no-unused-vars */
/** eslint-disable no-unused-vars */
import { useMemo, useState } from 'react'
import Box from './Box'
import BoxContent from './BoxContent'
import BoxList from './BoxList'
import Button from './Button'
import { useHomeAboutContent } from './HomeAboutContent'
import Title from './Title'
import useMobile from '../hooks/useMobile'
import { scrollTo } from '../helpers'
import { useTranslations } from 'next-intl'

const HomeAbout = () => {
  const [activeListKey, setActiveListKey] = useState('ola')
  const isMobile = useMobile()
  const { getContentWithHtml, getAllContent } = useHomeAboutContent()
  const t = useTranslations('HomeAbout')
  const content = useMemo(() => getContentWithHtml(activeListKey), [activeListKey, getContentWithHtml])
  const list = getAllContent()
  const onListItemSelected = key => setActiveListKey(key)

  if (!content) {
    return <></>
  }

  return (
    <Box
      aside={
        !isMobile && (
          <HomeAboutAside
            activeListKey={activeListKey}
            onListItemSelected={onListItemSelected}
            list={list}
          />
        )
      }
    >
      <Title subTitle={content.label} title={<h2>{content.title}</h2>} />
      {isMobile && (
        <HomeAboutAside
          activeListKey={activeListKey}
          onListItemSelected={onListItemSelected}
          list={list}
        />
      )}

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
