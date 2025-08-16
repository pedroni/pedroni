import React, { useMemo, useState } from 'react'
import Box from './Box'
import Title from './Title'
import BoxContent from './BoxContent'
import BoxList from './BoxList'
import Button from './Button'
import useMobile from '../hooks/useMobile'
import HomeServicesContent, { getByKey } from './HomeServicesContent'
import { scrollTo } from '../helpers'

const HomeServices = () => {
  const [activeListKey, setActiveListKey] = useState('servicos')
  const isMobile = useMobile()
  const content = useMemo(() => getByKey(activeListKey), [activeListKey])

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
        {content.content}
        <br />
        <br />
        <Button onClick={() => scrollTo('#contact')}>Entre em contato comigo</Button>
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
