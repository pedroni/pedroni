import React, { useMemo, useState } from 'react'
import Box from './Box'
import Title from './Title'
import BoxContent from './BoxContent'
import BoxList from './BoxList'
import Button from './Button'
import useMobile from '../hooks/useMobile'
import HomeServicesContent, { getByKey } from './HomeServicesContent'

const HomeServices = props => {
  const [activeListKey, setActiveListKey] = useState('aplicativos')
  const isMobile = useMobile()
  const content = useMemo(() => getByKey(activeListKey), [activeListKey])
  const onListKeySelected = key => setActiveListKey(key)

  if (!content) {
    return <></>
  }

  return (
    <Box
      {...props}
      aside={
        !isMobile && (
          <HomeServicesAside
            activeListKey={activeListKey}
            onListKeySelected={onListKeySelected}
          />
        )
      }
    >
      <Title subTitle={content.label} title={<h2>{content.title}</h2>} />
      {isMobile && (
        <HomeServicesAside
          activeListKey={activeListKey}
          onListKeySelected={onListKeySelected}
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

const HomeServicesAside = ({
  activeListKey,
  onListKeySelected = key => {}
}) => {
  const list = HomeServicesContent

  const content = useMemo(() => getByKey(activeListKey), [activeListKey])

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
