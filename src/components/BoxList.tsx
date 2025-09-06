'use client';
/** eslint-disable @typescript-eslint/no-unused-vars */
/** eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import styles from './BoxList.module.css'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BoxList = ({ list, onItemSelected = key => {}, activeItem }) => {
  const _onItemSelected = item => {
    setActiveItem(item)
    onItemSelected(item)
  }

  const [_activeItem, setActiveItem] = useState(activeItem)

  useEffect(() => {
    if (!_activeItem) {
      setActiveItem(list[0]?.key)
    }
  }, [_activeItem, list])

  useEffect(() => {
    if (activeItem !== _activeItem) {
      setActiveItem(activeItem)
      onItemSelected(activeItem)
    }
  }, [activeItem, _activeItem, onItemSelected])

  return (
    <ul className={styles.boxList}>
      {list.map(({ key, label }) => (
        <li
          tabIndex={0}
          role="button"
          onClick={() => _onItemSelected({ key, label })}
          key={key}
          className={`${styles.boxListItem} ${_activeItem?.key === key ? styles.active : ''}`}
        >
          {label}
        </li>
      ))}
    </ul>
  )
}

export default BoxList
