'use client'

import { useMemo } from 'react'
import BoxList from './BoxList'

interface ListItem {
  key: string
  label: string
  title: string
  content: string
}

interface HomeServicesAsideProps {
  activeListKey: string
  onListKeySelected: (key: string) => void
  list: ListItem[]
}

const HomeServicesAside = ({ activeListKey, onListKeySelected, list }: HomeServicesAsideProps) => {
  const content = useMemo(
    () => list.find(item => item.key === activeListKey),
    [activeListKey, list]
  )

  const handleItemSelected = (item: ListItem) => {
    onListKeySelected(item.key)
  }

  return (
    <>
      <img
        src="/img/03.png"
        height="160"
        srcSet="/img/03.png 1x, /img/03@2x.png 2x,"
        alt=""
        className="brightness--2 hidden lg:block"
        style={{ marginBottom: 16 }}
      />
      <BoxList
        list={list}
        onItemSelected={handleItemSelected}
        activeItem={content}
      />
    </>
  )
}

export default HomeServicesAside