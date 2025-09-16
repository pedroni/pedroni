'use client'

import { useMemo } from 'react'
import BoxList from './BoxList'

interface ListItem {
  key: string
  label: string
  title: string
  content: string
}

interface HomeAboutAsideProps {
  activeListKey: string
  onListItemSelected: (key: string) => void
  list: ListItem[]
}

const HomeAboutAside = ({
  activeListKey,
  onListItemSelected,
  list
}: HomeAboutAsideProps) => {
  const content = useMemo(
    () => list.find(item => item.key === activeListKey),
    [activeListKey, list]
  )

  const handleItemSelected = (item: ListItem) => {
    onListItemSelected(item.key)
  }

  return (
    <>
      <img
        src="/img/01.png"
        height="160"
        srcSet="/img/01.png 1x, /img/01@2x.png 2x,"
        alt=""
        className="brightness--2 mb-4 hidden lg:block"
      />

      <BoxList
        list={list}
        onItemSelected={handleItemSelected}
        activeItem={content}
      />
    </>
  )
}

export default HomeAboutAside
