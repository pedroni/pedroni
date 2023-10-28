import { useMemo, useState } from 'react'
import useMobile from '../hooks/useMobile'
import Box from './Box'
import BoxContent from './BoxContent'
import BoxList from './BoxList'
import Button from './Button'
import HomeAboutContent, { getByKey } from './HomeAboutContent'
import Title from './Title'

const HomeAbout = props => {
  const [activeListKey, setActiveListKey] = useState('ola')
  const isMobile = useMobile()
  const content = useMemo(() => getByKey(activeListKey), [activeListKey])
  const onListItemSelected = key => setActiveListKey(key)

  if (!content) {
    return <></>
  }

  return (
    <Box
      {...props}
      aside={
        !isMobile && (
          <HomeAboutAside
            activeListKey={activeListKey}
            onListItemSelected={onListItemSelected}
          />
        )
      }
    >
      <Title subTitle={content.label} title={<h2>{content.title}</h2>} />
      {isMobile && (
        <HomeAboutAside
          activeListKey={activeListKey}
          onListItemSelected={onListItemSelected}
        />
      )}
      <BoxContent>
        {content.content}
        <br />
        <br />
        <Button onClick={props.onContact}>Entre em contato comigo</Button>
      </BoxContent>
    </Box>
  )
}

const HomeAboutAside = ({ activeListKey, onListItemSelected = key => {} }) => {
  const list = HomeAboutContent
  const content = useMemo(() => getByKey(activeListKey) || {}, [activeListKey])

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
